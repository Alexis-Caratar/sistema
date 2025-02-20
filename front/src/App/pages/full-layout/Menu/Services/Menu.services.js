// Abria que ajustar esto a su medida
import { FiHome, FiGrid, FiShoppingCart, FiUsers, FiLogIn } from 'react-icons/fi';

const getMenuItems = () => {
  return [
    { path: '/', name: 'Inicio', icon: <FiHome /> },
    { path: '/categories', name: 'Categorías', icon: <FiGrid /> },
    { path: '/cart', name: 'Carrito', icon: <FiShoppingCart /> },
    { path: '/Nosotros', name: 'Nosotros', icon: <FiUsers /> },
    { path: '/login', name: 'Login', icon: <FiLogIn /> },
  ];
};

export default { getMenuItems };
