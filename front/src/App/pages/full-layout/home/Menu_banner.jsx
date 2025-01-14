import React from 'react';
import './Menu_banner.css';
import Welcome from './Welcome';
import Products from './/ProductCards';


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
          </ul>
        </nav>
      </header>

      {/* Carrusel de imágenes */}
      <div className="image-slider">
        <div className="image-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDpkF5lVHtez-AIdz-VOt0dvBv_9dU_jFiXgJ2ZbcbeGGTDxaRIPXncvspQHXePw-Tds&usqp=CAU" alt="Imagen 1" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDpkF5lVHtez-AIdz-VOt0dvBv_9dU_jFiXgJ2ZbcbeGGTDxaRIPXncvspQHXePw-Tds&usqp=CAU" alt="Imagen 2" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDpkF5lVHtez-AIdz-VOt0dvBv_9dU_jFiXgJ2ZbcbeGGTDxaRIPXncvspQHXePw-Tds&usqp=CAU" alt="Imagen 3" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDpkF5lVHtez-AIdz-VOt0dvBv_9dU_jFiXgJ2ZbcbeGGTDxaRIPXncvspQHXePw-Tds&usqp=CAU" alt="Imagen 4" />
        </div>
      </div>

      {/* Componente de bienvenida */}
      <Welcome />
      <Products/>
    </div>
  );
}

export default Header;
