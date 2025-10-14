function Button({ children, disabled, to }) {
  const className =
    'inline-block rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-400 sm:px-6 sm:py-4';

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;
