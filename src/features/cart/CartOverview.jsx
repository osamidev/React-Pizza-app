import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-center font-semibold uppercase text-stone-200 sm:px-6">
      <p className="space-x-4 text-sm font-semibold text-stone-300 sm:space-x-6 md:text-base">
        <span>23 pizzas</span>
        <span>$23.45</span>
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
