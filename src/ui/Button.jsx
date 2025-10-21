import { Link } from 'react-router-dom';

function Button({
  children,
  disabled,
  to,
  type,
  onClick,
}) {
  const base =
    'inline-block text-sm  rounded-full bg-yellow-400 text-sm font-semibold uppercase tracking-wide hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-400';

  const styles = {
    primary: base + ' px-4 py-3 sm:px-6 sm:py-4',
    small: base + ' text-xs px-3 py-1.5',
    secondary:
      'inline-block text-sm border-2 border-stone-300 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-400 px-4 py-3 sm:px-6 sm:py-4',
    quantity: base + ' w-8 h-8',
    positioned: base + ' py-2 px-3 mx-[3px]',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        disabled={disabled}
        className={styles[type]}
        onClick={onClick}
      >
        {children}
      </button>
    );
  return (
    <button
      disabled={disabled}
      className={styles[type]}
    >
      {children}
    </button>
  );
}

export default Button;
