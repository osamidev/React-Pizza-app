import { formatCurrency } from './../../utils/helpers';

function MenuItem({ pizza }) {
  const {
    id,
    name,
    unitPrice,
    ingredients,
    soldOut,
    imageUrl,
  } = pizza;

  return (
    <li className="flex items-start gap-4 p-2">
      <img src={imageUrl} alt={name} />
      <div>
        <p className="text-lg font-semibold">
          {name}
        </p>
        <p>{ingredients.join(', ')}</p>
        <div className="">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p>Sold out</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
