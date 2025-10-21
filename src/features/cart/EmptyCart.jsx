import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="mt-2 px-4 py-2 text-stone-600">
      <LinkButton to="/menu">
        &larr; Back to menu
      </LinkButton>

      <p className="mt-7 text-lg font-semibold">
        Your cart is still empty. Start adding
        some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
