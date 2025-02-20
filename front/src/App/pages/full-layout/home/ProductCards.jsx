import React, { useState } from 'react';
import './ProductCards.css';
import {FiShoppingCart } from 'react-icons/fi';
import { ProductosService } from './Service/Productos.service';

function ProductCards() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartMinimized, setIsCartMinimized] = useState(true);
  const products = ProductosService;
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
    setShowMoreInfo(false);
  };

  const toggleMoreInfo = () => {
    setShowMoreInfo((prev) => !prev);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const product = prevCart.find((item) => item.id === productId);
      if (product && product.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };

  const toggleCart = () => {
    setIsCartMinimized((prevState) => !prevState);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const updateQuantity = (id, change) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) } // No permite cantidades menores a 1
        : item
    ));
  };

  return (
  
    <div className="container">
        <h2 className='text-center h2'>Productos destacados</h2><br/>
      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />

      {/* Tarjetas de productos */}
      <div className="product-cards">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card" onClick={() => openModal(product)}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">{`$${product.price}`}</div>
            <button onClick={(e) => { e.stopPropagation(); addToCart(product); }} className="btn btn-dark w-100">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {/* Carrito minimizado con ícono */}
      <div
          className={`cart-icon ${isCartMinimized ? 'minimized' : ''}`}
          onClick={toggleCart}
        >
          { <FiShoppingCart/> } {/* Eliminar el icono de react-icons */}
          <span className="cart-icon-wrapper">
            <i className="fas fa-shopping-cart"></i>
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
              <div className="quantity-controls">
                <button
                  className="quantity-btn decrease"
                  onClick={() => updateQuantity(item.id, -1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button
                  className="quantity-btn increase"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="remove-btn">Eliminar</button>
          </li>
        ))}
      </ul>
      <div className="total">
        <strong>Total: ${getCartTotal()}</strong>
      </div>
      <button className="checkout-btn">Ir a pagar</button>
    </div>
    
      )}

      {/* Modal de producto */}
      {modalOpen && selectedProduct && (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <div className="product-details">
          <h2 className="product-name">{selectedProduct.name}</h2>
          <div className="product-image">
            <img src={selectedProduct.image} alt={selectedProduct.name} />
          </div>
          <div className="product-description">{selectedProduct.description}</div>
          {showMoreInfo && (
            <div className="more-info">{selectedProduct.moreInfo}</div>
          )}
          <button onClick={toggleMoreInfo} className="more-info-btn">
            {showMoreInfo ? 'Ver menos' : 'Ver más'}
          </button>
          <button onClick={() => addToCart(selectedProduct)} className="add-to-cart">
            Agregar al carrito
          </button>
        </div>
      </div>
</div>

      )}
    </div>
  );
}

export default ProductCards;
