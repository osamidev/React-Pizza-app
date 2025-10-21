import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import {
  getTotalCartPrice,
  getTotalCartQuantity,
} from './cartSlice';

function CartOverview() {
  const totalCartQuantity = useSelector(
    getTotalCartQuantity,
  );
  const totalCartPrice = useSelector(
    getTotalCartPrice,
  );

  if (!totalCartQuantity) {
    return null;
  }

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-center font-semibold uppercase text-stone-200 sm:px-6">
      <p className="space-x-4 text-sm font-semibold text-stone-300 sm:space-x-6 md:text-base">
        <span>{totalCartQuantity} pizzas</span>
        <span>
          {formatCurrency(totalCartPrice)}
        </span>
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
