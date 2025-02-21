import React, { useEffect } from 'react';

function Cart({ cart, getCartTotal, updateCart }) {
  useEffect(() => {
    // Si el carrito no se pasa por props (por algún motivo), intentamos cargarlo desde localStorage
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

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <div>{item.name}</div>
                  <div>${item.price}</div>
                  <div>Cantidad: {item.quantity}</div>
                  <button onClick={() => removeProduct(item.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total: ${getCartTotal()}</strong>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
