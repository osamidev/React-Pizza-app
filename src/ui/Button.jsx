import { Link } from 'react-router-dom';

function Button({
  children,
  disabled,
  to,
  type,
}) {
  const base =
    'inline-block rounded-full bg-yellow-400 text-sm font-semibold uppercase tracking-wide hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-400 ';

  const styles = {
    primary: base + ' px-4 py-3 sm:px-6 sm:py-4',
    small: base + ' text-xs px-3 py-1.5',
  };

  if (to)
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
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
