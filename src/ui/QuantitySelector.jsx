import { useDispatch } from 'react-redux';
import Button from './Button';
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from '../features/cart/cartSlice';

function QuantitySelector({ quantity, id }) {
  const dispatch = useDispatch();
  function handleDec() {
    if (quantity <= 1) {
      dispatch(deleteItem(id));
      return;
    }

    dispatch(decreaseItemQuantity(id));
  }

  function handleInc() {
    dispatch(increaseItemQuantity(id));
  }

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <Button onClick={handleDec} type="quantity">
        -
      </Button>
      <span className="text-sm font-semibold text-stone-700">
        {quantity}
      </span>
      <Button onClick={handleInc} type="quantity">
        +
      </Button>
    </div>
  );
}

export default QuantitySelector;
