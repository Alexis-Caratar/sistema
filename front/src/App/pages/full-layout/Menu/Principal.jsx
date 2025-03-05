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

  // Cargar carrito desde localStorage cuando el componente se monta
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Asignar el carrito desde localStorage
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('cart'); // Eliminar carrito antes de recargar la página
    };

    // Asignar el evento beforeunload
    window.onbeforeunload = handleBeforeUnload;

    // Cleanup cuando el componente se desmonte
    return () => {
      window.onbeforeunload = null; // Limpiar el evento
    };
  }, []); // Este useEffect se ejecuta solo una vez al montar el componente


  
  // Guardar carrito en localStorage cada vez que cambie el estado de `cart`
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart)); // Guardar carrito en localStorage
    } else {
      localStorage.removeItem('cart'); // Si el carrito está vacío, eliminarlo del localStorage
    }
  }, [cart]);

  // Función para alternar la visibilidad del carrito
  const toggleCart = () => {
    setIsCartMinimized((prevState) => !prevState);
  };

  // Función para calcular el total del carrito
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0).toFixed(2);
  };

  // Función para actualizar el carrito (agregar o quitar productos)
  const updateCart = (updateFn) => {
    setCart(updateFn);
  };

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    console.log('Producto añadido al carrito:', product);

    setCart((prevCart) => {
      // Verificar si el producto ya está en el carrito
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Si el producto ya existe, incrementar la cantidad
        const updatedCart = prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return updatedCart;
      } else {
        // Si el producto no existe, agregarlo al carrito con cantidad 1
        const updatedCart = [...prevCart, { ...product, quantity: 1 }];
        return updatedCart;
      }
    });
  };

  return (
    <div>
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
        <Route path="/" element={<Welcome  addToCart={addToCart}/>} />
        <Route path="/categories" element={<Categories addToCart={addToCart} />} />
        <Route 
          path="/cart" 
          element={<Cart cart={cart} getCartTotal={getCartTotal} updateCart={updateCart} />} 
        />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default Principal;
