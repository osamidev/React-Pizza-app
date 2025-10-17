// Test ID: IIDSAT

<<<<<<< HEAD
import OrderItem from './OrderItem';

import { useLoaderData } from 'react-router-dom';
=======
>>>>>>> recovery
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
<<<<<<< HEAD
=======
import OrderItem from './OrderItem';

const order = {
  id: 'ABCDEF',
  customer: 'Jonas',
  phone: '123456789',
  address: 'Arroios, Lisbon , Portugal',
  priority: true,
  estimatedDelivery: '2027-04-25T10:00:00',
  cart: [
    {
      pizzaId: 7,
      name: 'Napoli',
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: 'Diavola',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: 'Romana',
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: '-9.000,38.000',
  orderPrice: 95,
  priorityPrice: 19,
  status: 'Delivered',
};
>>>>>>> recovery

function Order() {
  const order = useLoaderData();

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
<<<<<<< HEAD

  const deliveryIn = calcMinutesLeft(
    estimatedDelivery,
  );

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">
          Order #{id} status
        </h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
=======
  const deliveryIn = calcMinutesLeft(
    estimatedDelivery,
  );

  // console.log(order);

  return (
    <div className="space-y-4 px-4 py-6">
      <div className="mb-7 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">
          Order #{id} Status
        </h2>

        <div className="space-x-4">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase text-stone-100">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase text-stone-100">
>>>>>>> recovery
            {status} order
          </span>
        </div>
      </div>

<<<<<<< HEAD
      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
=======
      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-4 py-6">
        <p className="text-base font-semibold text-stone-700">
>>>>>>> recovery
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery:{' '}
          {formatDate(estimatedDelivery)})
        </p>
      </div>

<<<<<<< HEAD
      <ul className="dive-stone-200 divide-y border-b border-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
=======
      <ul>
        {cart.map((item) => (
          <OrderItem
            item={item}
            ingredients={item.ingredients}
            key={item.pizzaId}
          />
        ))}
      </ul>

      <div className="space-y-1 bg-stone-200 px-4 py-6">
        <p className="text-sm font-semibold text-stone-600">
>>>>>>> recovery
          Price pizza:{' '}
          {formatCurrency(orderPrice)}
        </p>
        {priority && (
<<<<<<< HEAD
          <p className="text-sm font-medium text-stone-600">
=======
          <p className="text-sm font-semibold text-stone-600">
>>>>>>> recovery
            Price priority:{' '}
            {formatCurrency(priorityPrice)}
          </p>
        )}
<<<<<<< HEAD
        <p className="font-bold">
=======
        <p className="text-lg font-bold text-stone-700">
>>>>>>> recovery
          To pay on delivery:{' '}
          {formatCurrency(
            orderPrice + priorityPrice,
          )}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
