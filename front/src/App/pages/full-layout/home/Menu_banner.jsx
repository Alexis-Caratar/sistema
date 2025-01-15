import React from 'react';
import './Menu_banner.css';
import Welcome from './Welcome';
import Products from './ProductCards';
import Footer from './Menu/Footer';
import { FaWhatsapp } from 'react-icons/fa'; // Importa el ícono de WhatsApp

function Header() {
  return (
    <div>
      {/* Encabezado */}
      <header className="header">
        <div className="logo">
          <a href="/" className="logo-text">IRIS WORD SHOP</a>
        </div>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/categories">Categorías</a></li>
            <li><a href="/cart">Carrito</a></li>
            <li><a href="/cart">contactos</a></li>
            <li><a href="/cart">Nosotros</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Carrusel de imágenes */}
      <div className="image-slider">
        <div className="image-container">
          <img src="https://www.studiof.com.co/arquivos/banner-landing-01-07-2025-sm.jpg?v=638715122313130000" alt="Imagen 1" />
          <img src="https://www.studiof.com.co/arquivos/banner-landing-01-11-2024-sm.jpg?v=638721326060170000" alt="Imagen 2" />
          <img src="https://www.studiof.com.co/arquivos/banner-landing-01-07-2025-sm.jpg?v=638715122313130000" alt="Imagen 3" />
          <img src="https://www.studiof.com.co/arquivos/banner-landing-01-14-2025-sm.jpg?v=638723999070400000" alt="Imagen 4" />
        </div>
      </div>

      {/* Componente de bienvenida */}
      <Welcome />
      <Products/>
      <Footer/>

      {/* Icono de WhatsApp */}
      <div className="whatsapp-icon">
        <a href="https://wa.me/573162467600" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={50} color="#25D366" />
        </a>
      </div>
    </div>
  );
}

export default Header;
