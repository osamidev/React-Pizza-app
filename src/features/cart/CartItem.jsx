import DeleteButton from '../../ui/DeleteButton';
import QuantitySelector from '../../ui/QuantitySelector';
import { formatCurrency } from '../../utils/helpers';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } =
    item;

  // function handleDeleteItem() {
  //   const id = pizzaId;
  //   dispatch(deleteItem(id));
  // }

  return (
    <li className="flex flex-wrap items-center justify-between py-4">
      <p className="text-base font-semibold">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-3 sm:gap-6">
        <p className="text-sm font-semibold">
          {formatCurrency(totalPrice)}
        </p>
        <QuantitySelector
          quantity={quantity}
          id={pizzaId}
        />
        <DeleteButton pizzaId={pizzaId}>
          Delete
        </DeleteButton>
      </div>
    </li>
  );
}

export default CartItem;
