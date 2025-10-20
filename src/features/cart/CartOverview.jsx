import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const cart = useSelector(
    (state) => state.cart.cart,
  );

  if (cart.length === 0) {
    return null;
  }

  const totalPizzas = cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const totalPrice = cart.reduce(
    (total, item) => total + item.totalPrice,
    0,
  );

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-center font-semibold uppercase text-stone-200 sm:px-6">
      <p className="space-x-4 text-sm font-semibold text-stone-300 sm:space-x-6 md:text-base">
        <span>{totalPizzas} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link
        to="/cart"
        className="font-light hover:underline"
      >
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
