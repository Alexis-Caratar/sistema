import './FloatingCart.css';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function FloatingCart({ cart, isCartMinimized, toggleCart, getCartTotal, updateCart }) {
  // Función para aumentar la cantidad de un producto
  const increaseQuantity = (productId) => {
    updateCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Función para reducir la cantidad de un producto
  const decreaseQuantity = (productId) => {
    updateCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Función para eliminar un producto del carrito
  const removeProduct = (productId) => {
    updateCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <div
        className={`cart-icon ${isCartMinimized ? 'minimized' : ''}`}
        onClick={toggleCart}
      >
        <FiShoppingCart size={30} color="#fff" />
        <span className="cart-count">
          {cart.reduce((sum, item) => sum + item.quantity, 0)}
        </span>
      </div>

      {!isCartMinimized && (
        <div className="cart-modal">
          <button onClick={toggleCart} className="minimize-btn">Minimizar</button>
          <h2>Carrito de Compras</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.imagen_principal} alt={item.nombre} />
                <div>{item.nombre}</div>
                <div>Precio: ${item.precio}</div>
                
                {/* Control de cantidad */}
                <div className="cart-item-quantity">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  {item.quantity}
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                {/* Botón para eliminar */}
                <button className='error' onClick={() => removeProduct(item.id)}>X</button>
              </li>
            ))}
          </ul>

          <div>Total: ${getCartTotal()}</div>
          <Link to="/cart">
            <button>Ir al carrito</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default FloatingCart;
