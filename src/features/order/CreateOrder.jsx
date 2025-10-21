import {
  Form,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom';
import store from './../../store';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  clearCart,
  getCart,
  getTotalCartPrice,
} from '../cart/cartSlice';
import { useState } from 'react';
import { formatCurrency } from '../../utils/helpers';
import {
  fetchAddress,
  getGeoAddress,
} from '../user/userSlice';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function CreateOrder() {
  // const username = useSelector(
  //   (state) => state.user.username,
  // );
  const dispatch = useDispatch();
  const [withPriority, setWithPriority] =
    useState(false);
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);

  const isLoadingAddress =
    addressStatus === 'loading';

  const navigation = useNavigation();
  const isSubmitting =
    navigation.state === 'submitting';

  const formErrors = useActionData();

  const totalCartPrice = useSelector(
    getTotalCartPrice,
  );
  const priorityFee = withPriority
    ? totalCartPrice * 0.2
    : 0;

  const totalPrice = totalCartPrice + priorityFee;

  const cart = useSelector(getCart);

  return (
    <div className="px-4 py-6">
      <h2 className="mb-7 text-xl font-semibold">
        Ready to order? Let's go!
      </h2>

      {/* <Button
        type="positioned"
        onClick={() => {
          dispatch(fetchAddress());
        }}
      >
        get position
      </Button> */}
      <Form
        method="POST"
        // onSubmit={() => {
        //   dispatch(clearCart());
        // }}
      >
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">
            First Name
          </label>
          <input
            type="text"
            name="customer"
            defaultValue={username}
            required
            className="input grow"
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">
            Phone number
          </label>
          <div className="grow">
            <input
              type="tel"
              name="phone"
              required
              className="input w-full"
            />
            {formErrors?.phone && (
              <p className="mt-2 inline-block w-full rounded-full bg-red-200 px-6 py-3 text-sm text-red-800">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">
            Address
          </label>
          <div className="relative grow">
            <input
              type="text"
              name="address"
              required
              disabled={isLoadingAddress}
              defaultValue={address}
              className="input w-full"
            />

            {addressStatus === 'error' && (
              <p className="mt-2 inline-block w-full rounded-full bg-red-200 px-6 py-3 text-sm text-red-800">
                {errorAddress}
              </p>
            )}
            {!position.latitude &&
              !position.longitude && (
                <span className="absolute right-[-2px] top-[1px] z-50 sm:right-[5px] sm:top-[3px] md:right-[3px] md:top-[5px]">
                  <Button
                    type="positioned"
                    disabled={isLoadingAddress}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(fetchAddress());
                    }}
                  >
                    get position
                  </Button>
                </span>
              )}
          </div>
        </div>

        <div className="mb-12 flex items-center gap-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            value={withPriority}
            onChange={(e) =>
              setWithPriority(e.target.checked)
            }
          />
          <label htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input
            type="hidden"
            name="cart"
            value={JSON.stringify(cart)}
          />
          <input
            type="hidden"
            name="position"
            value={
              position.latitude &&
              position.longitude
                ? `${position.latitude}, ${position.longitude}`
                : ''
            }
          />
          <Button
            type="primary"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? 'Placing order...'
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please enter a valid phone number!';

  if (Object.keys(errors).length > 0)
    return errors;

  // DO NOT OVERUSE IT - only in specific cases
  store.dispatch(clearCart());

  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
