import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { deleteItem } from './cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } =
    item;

  const dispatch = useDispatch();

  function handleDeleteItem() {
    const id = pizzaId;
    dispatch(deleteItem(id));
  }

  return (
    <li className="py-4 sm:flex sm:justify-between">
      <p className="text-base font-semibold">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-semibold">
          {formatCurrency(totalPrice)}
        </p>
        <Button
          type="small"
          onClick={handleDeleteItem}
        >
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
