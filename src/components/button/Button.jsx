import { Link } from 'react-router-dom';
import './button.css';

function Button(props) {
  const { title, action, to, type, width, height } = props;

  return (
    <>
      {type !== 'button' ? (
        <Link
          to={to}
          className='button'
          style={{ width: width, height: height }}
        >
          {title}
        </Link>
      ) : (
        <button
          style={{ width: width, height: height }}
          className='button'
          onClick={action}
        >
          {title}
        </button>
      )}
    </>
  );
}

export default Button;
