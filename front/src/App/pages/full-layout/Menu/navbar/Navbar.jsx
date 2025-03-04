import './Navbar.css';
import { FiHome, FiGrid, FiShoppingCart, FiPhone, FiUsers, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      {/* Encabezado */}
      <header className="header">
        <div className="logo">
          <img src='/src/assets/img/logos_principal/logo_principal.png' alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/"><FiHome /> Inicio</Link></li>
            <li><Link to="/categories"><FiGrid /> Categorías</Link></li>
            <li><Link to="/cart"><FiShoppingCart /> Carrito</Link></li>
            <li><Link to="/Nosotros"><FiUsers /> Nosotros</Link></li>
            <li><Link to="/login"><FiLogIn /> Login</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
