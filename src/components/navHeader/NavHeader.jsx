import { Link } from 'react-router-dom';
import './NavHeader.css';
function NavHeader() {
  return (
    <nav className='navContainer'>
      <ul className='navList'>
        <li>
          <Link className='link' to={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link className='link' to={'/Eventos'}>
            Eventos
          </Link>
        </li>
        <li>
          <Link className='link' to={'/Map'}>
            Mapa
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavHeader;
