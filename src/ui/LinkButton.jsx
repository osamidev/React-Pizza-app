import { Link } from 'react-router-dom';

function LinkButton({ children, to }) {
  if (to === '-1')
    return (
      <button onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link
      to={to}
      className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
