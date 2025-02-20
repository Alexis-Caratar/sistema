import React from 'react';
import Products from '../ProductCards';
import './Welcome.css'

function Welcome() {
  return (
    <div className="welcome-section">
          {/* Carrusel de imágenes */}
          <div className="image-slider">
        <div className="image-container">
          <img src="https://www.studiof.com.co/arquivos/banner-landing-01-07-2025-sm.jpg?v=638715122313130000" alt="Imagen 1" />
          <img src="https://www.studiof.com.co/arquivos/banner-landing-01-11-2024-sm.jpg?v=638721326060170000" alt="Imagen 2" />
          <img src="https://www.studiof.com.co/arquivos/banner-landing-01-07-2025-sm.jpg?v=638715122313130000" alt="Imagen 3" />
          <img src="https://www.studiof.com.co/arquivos/banner-landing-01-14-2025-sm.jpg?v=638723999070400000" alt="Imagen 4" />
        </div>
      </div>
      {/*Mensaje de bienvenida */}
      <h2>¡Bienvenido a Iris World Shop!</h2>
      <p>Explora nuestra exclusiva selección de productos y encuentra lo que más te gusta. ¡Ofrecemos calidad y variedad para ti!</p>
      <Products/>
      
    </div>
   
  );
}

export default Welcome;
