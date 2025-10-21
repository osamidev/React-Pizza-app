import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import EmptyCart from './EmptyCart';
import { clearCart } from './cartSlice';
import { getUsername } from '../user/userSlice';

function Cart() {
  const cart = useSelector(
    (state) => state.cart.cart,
  );
  const username = useSelector(getUsername);

  const dispatch = useDispatch();

  if (cart.length === 0) return <EmptyCart />;

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
        <Button
          type="secondary"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
