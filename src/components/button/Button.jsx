import { Link } from 'react-router-dom';
import style from './button.module.css';

function ButtonComponent(props) {
  const { title, action, to, type, width, height, styleComponent } = props;

  return (
    <>
      {type !== 'button' ? (
        <Link
          to={to}
          style={{ width: width, height: height, ...styleComponent }}
          className={style.buttonComponent}
        >
          {title}
        </Link>
      ) : (
        <button
          style={{ width: width, height: height, ...styleComponent }}
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
