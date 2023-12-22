import { Link } from 'react-router-dom';
import style from './button.module.css';

function ButtonComponent(props) {
  const { title, action, to, type, width, height } = props;

  return (
    <>
      {type !== 'button' ? (
        <Link
          to={to}
          className={style.buttonComponent}
          style={{ width: width, height: height }}
        >
          {title}
        </Link>
      ) : (
        <button
          style={{ width: width, height: height }}
          className={style.buttonComponent}
          onClick={action}
        >
          {title}
        </button>
      )}
    </>
  );
}

export default ButtonComponent;
