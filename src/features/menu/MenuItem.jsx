import { useEffect, useState } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { formatCurrency } from './../../utils/helpers';
import Button from './../../ui/Button';
import {
  addItem,
  deleteItem,
} from '../cart/cartSlice';
import { use } from 'react';

function MenuItem({ pizza }) {
  const {
    id,
    name,
    unitPrice,
    ingredients,
    soldOut,
    imageUrl,
  } = pizza;
  // const cartItems = useSelector(
  //   (state) => state.cart.cart,
  // );
  const inCart = useSelector((state) =>
    state.cart.cart.some(
      (item) => item.pizzaId === id,
    ),
  );
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const isInCart = cartItems.some(
  //     (item) => item.pizzaId === id,
  //   );
  //   setInCart(isInCart);
  // }, [cartItems, id]);

  function handleAddItem() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newItem));
  }

  function handleDeleteItem() {
    dispatch(deleteItem(id));
  }

  return (
    <li className="flex gap-4 py-4">
      <img
        src={imageUrl}
        alt={name}
        className={`h-28 object-cover sm:h-36 md:h-48 ${soldOut ? 'grayscale' : ''}`}
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
            (inCart ? (
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
