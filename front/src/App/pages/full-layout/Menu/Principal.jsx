import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from '../home/Welcome/Welcome';
import Categories from '../Categories/Categories';
import Cart from '../carrito/Cart.jsx';
import Nosotros from '../Nosostros/Nosotros';
import Login from '../../content-layout/login/Login';
import Navbar from './navbar/Navbar';
import Footer from './Footer/Footer';
import FloatingCart from '../carrito/Carrito_flotante/FloatingCart.jsx';

function Principal() {
  const [cart, setCart] = useState([]);
  const [isCartMinimized, setIsCartMinimized] = useState(true);

  // Recuperar carrito desde localStorage cuando el componente se monta
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Asignar el carrito desde localStorage
    }
  }, []);

  // Guardar carrito en localStorage cada vez que cambie el estado de `cart`
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart)); // Guardar carrito en localStorage
    } else {
      localStorage.removeItem('cart'); // Si el carrito está vacío, eliminarlo del localStorage
    }
  }, [cart]);

  // Eliminar carrito en localStorage al recargar la página
  useEffect(() => {
    // Esto se ejecutará una vez cuando el componente se monte
    window.onbeforeunload = () => {
      localStorage.removeItem('cart'); // Eliminar carrito antes de recargar
    };
    
    // Cleanup cuando el componente se desmonte
    return () => {
      window.onbeforeunload = null; // Limpiar el evento
    };
  }, []); // Se ejecuta solo una vez al cargar el componente

  // Función para alternar la visibilidad del carrito
  const toggleCart = () => {
    setIsCartMinimized((prevState) => !prevState);
  };

  // Función para calcular el total del carrito
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Función para actualizar el carrito (agregar o quitar productos)
  const updateCart = (updateFn) => {
    setCart(updateFn);
  };

  return (
    <div>
      {/* Componente de navegación */}
      <Navbar />

      {/* Componente de carrito flotante */}
      <FloatingCart
        cart={cart}
        isCartMinimized={isCartMinimized}
        toggleCart={toggleCart}
        getCartTotal={getCartTotal}
        updateCart={updateCart}
      />

      {/* Rutas principales */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/categories" element={<Categories />} />
        
        {/* Pasamos las props correctamente al componente Cart */}
        <Route 
          path="/cart" 
          element={<Cart cart={cart} getCartTotal={getCartTotal} updateCart={updateCart} />} 
        />
        
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default Principal;
