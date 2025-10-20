import { formatCurrency } from './../../utils/helpers';
import Button from './../../ui/Button';
import { useDispatch } from 'react-redux';
import {
  addItem,
  deleteItem,
} from '../cart/cartSice';
import { useState } from 'react';

function MenuItem({ pizza }) {
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useDispatch();
  const {
    id,
    name,
    unitPrice,
    ingredients,
    soldOut,
    imageUrl,
  } = pizza;

  function handleAddItem() {
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    };
    setIsInCart(true);
    dispatch(addItem(newItem));
  }

  function handleDeleteItem() {
    setIsInCart(false);
    dispatch(deleteItem(id));
  }

  return (
    <li className="flex gap-4 py-4">
      <img
        src={imageUrl}
        alt={name}
        className={`h-28 sm:h-36 md:h-48 ${soldOut ? 'grayscale' : ''}`}
      />
      <div className="flex grow flex-col">
        <p className="text-lg font-semibold">
          {name}
        </p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-base font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {!soldOut &&
            (isInCart ? (
              <Button
                type="small"
                onClick={handleDeleteItem}
              >
                Delete
              </Button>
            ) : (
              <Button
                type="small"
                onClick={handleAddItem}
              >
                Add to cart
              </Button>
            ))}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
