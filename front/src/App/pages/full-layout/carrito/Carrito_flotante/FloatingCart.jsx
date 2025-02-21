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
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Función para eliminar un producto del carrito
  const removeProduct = (productId) => {
    updateCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      {/* Carrito flotante (minimizado) */}
      <div
        className={`cart-icon ${isCartMinimized ? 'minimized' : ''}`}
        onClick={toggleCart}
      >
        <FiShoppingCart size={40} color="#fff" />
        <span className="cart-icon-wrapper">
          {cart.length > 0 && (
            <span className="cart-count">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </span>
      </div>

      {/* Carrito expandido */}
      {!isCartMinimized && (
        <div className="cart-modal">
          <button onClick={toggleCart} className="minimize-btn">Minimizar</button>
          <h2>Carrito de Compras</h2>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">${item.price}</div>
                  
                  {/* Subtotal debajo del precio */}
                  <div className="item-subtotal">
                    <small>Subtotal: ${(item.price * item.quantity).toFixed(2)}</small>
                  </div>
                </div>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item.id)} className="quantity-btn">-</button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} className="quantity-btn">+</button>
                </div>

                <button
                  onClick={() => removeProduct(item.id)}
                  className="remove-btn"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total: ${getCartTotal()}</strong>
          </div>

          <Link to="/cart">
            <button className="checkout-btn">Ir a pagar</button>
          </Link>
        </div>
      )}

      {/* Botón de WhatsApp fuera del carrito */}
      <div className="whatsapp-chat">
        <a 
          href="https://wa.me/3123249938?text=Hola%2C%20necesito%20ayuda%20con%20mi%20pedido%20Iris%20World%20Shop" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp" 
            className="whatsapp-icon" 
          />
        </a>
      </div>
    </div>
  );
}

export default FloatingCart;
