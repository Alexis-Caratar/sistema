import React, { useEffect } from 'react';
import './Cart.css';

function Cart({ cart, getCartTotal, updateCart }) {
  // Si el carrito está vacío, lo carga desde localStorage
  useEffect(() => {
    if (cart.length === 0) {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        updateCart(JSON.parse(storedCart)); // Actualiza el carrito desde el localStorage
      }
    }
  }, [cart, updateCart]);

  // Función para eliminar un producto del carrito
  const removeProduct = (productId) => {
    updateCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

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

  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="empty-cart-message">¡Tu carrito está vacío! Añade productos para continuar.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.imagen_principal} alt={item.nombre} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.nombre}</h3>
                  <div className="cart-item-price">${item.precio}</div>
                  <div className="cart-item-quantity">
                    <strong>Cantidad:</strong> 
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    {item.quantity}
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <div className="cart-item-total">
                    <strong>Total por producto: </strong> ${item.precio * item.quantity}
                  </div>
                  <button
                    className="delete"
                    onClick={() => removeProduct(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <strong>Total: ${getCartTotal()}</strong>
          </div>

          <div className="checkout-section">
            <button className="success" >Proceder a la compra</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
