import React, { useState, useEffect } from 'react';
import FloatingCart from '../carrito/Carrito_flotante/FloatingCart';
import InfoAditional from './Info-Aditional/info_aditional';  
import HomeCategorias from './Home-Categorias/HomeCategorias';  

import './ProductCards.css';
import { ProductosService } from './Service/Productos.service';

function ProductCards() {
  const [cart, setCart] = useState([]);
  const [isCartMinimized, setIsCartMinimized] = useState(true);

  // Cargar carrito desde localStorage cuando el componente se monta
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart)); // Parsear los datos del carrito
    }
  }, []); // Este useEffect solo se ejecutará una vez cuando el componente se monte

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Verificar si el producto ya está en el carrito
      const existingProduct = prevCart.find((item) => item.id === product.id);
      
      if (existingProduct) {
        // Si el producto ya existe en el carrito, incrementar la cantidad
        const updatedCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        // Si no existe, agregar el producto al carrito con cantidad 1
        const updatedCart = [...prevCart, { ...product, quantity: 1 }];
        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      }
    });
  };

  // Función para calcular el total del carrito
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Función para alternar el estado del carrito (minimizado / expandido)
  const toggleCart = () => {
    setIsCartMinimized((prevState) => !prevState);
  };

  return (
    <div className="container">
      <h2 className='text-center h2'>Productos destacados</h2><br/>
      <div className="product-cards">
        {ProductosService.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">${product.price}</div>
            <button onClick={() => addToCart(product)} className="btn btn-dark w-100">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {/* Aquí estamos pasando las props a FloatingCart */}
      <FloatingCart 
        cart={cart} 
        isCartMinimized={isCartMinimized} 
        toggleCart={toggleCart} 
        getCartTotal={getCartTotal} 
      />

        {/*componente para la informacion de las categorias que tiene mi tienda*/}
        <HomeCategorias/>
        
      {/*componente para la informacion adicional al pie de la pagina principal*/}
      <InfoAditional/>
      
    </div>
  );
}

export default ProductCards;
