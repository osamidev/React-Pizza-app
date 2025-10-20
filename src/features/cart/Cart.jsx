import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import Username from '../user/Username';
import { updateUsername } from '../user/userSlice';
import { useSelector } from 'react-redux';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  const username = useSelector(
    (state) => state.user.username,
  );

  return (
    <div className="px-4 py-3">
      <LinkButton to={'/menu'}>
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-7 text-lg font-semibold">
        Your cart, {username}
      </h2>

      <ul className="mt-3 divide-y divide-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <div className="mt-7 flex items-center gap-5">
        {/* <Link to="/order/new">Order pizzas</Link> */}
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
