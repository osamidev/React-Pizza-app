import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { formatCurrency } from './../../utils/helpers';
import Button from './../../ui/Button';
import {
  addItem,
  getCurrentQuantityById,
} from '../cart/cartSlice';
import DeleteButton from '../../ui/DeleteButton';
import QuantitySelector from '../../ui/QuantitySelector';

function MenuItem({ pizza }) {
  const {
    id,
    name,
    unitPrice,
    ingredients,
    soldOut,
    imageUrl,
  } = pizza;
  const quantity = useSelector(
    getCurrentQuantityById(id),
  );
  const inCart = quantity > 0;

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
          {soldOut ? (
            <p className="text-base font-medium uppercase text-stone-500">
              Sold out
            </p>
          ) : (
            <p>{formatCurrency(unitPrice)}</p>
          )}

          {!soldOut && (
            <div className="flex w-full items-center justify-end gap-2 md:gap-6">
              {quantity > 0 && (
                <QuantitySelector
                  quantity={quantity}
                  id={id}
                />
              )}
              {inCart ? (
                <DeleteButton pizzaId={id}>
                  Delete
                </DeleteButton>
              ) : (
                <Button
                  type="small"
                  onClick={handleAddItem}
                >
                  Add to cart
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
