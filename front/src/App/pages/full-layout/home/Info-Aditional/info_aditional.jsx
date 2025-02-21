import React from 'react';
import './info_aditional.css';

const InfoAditional = () => {
  return (
    <div className="solicitud-container">
      <div className="solicitud-header">
        <h1>¿Cómo Realizar tu pedido?</h1>
        <p>Elige el canal que prefieras para hacer la solicitud.</p>
      </div>

      <div className="solicitud-canal">
        <div className="canal-item">
          <i className="fab fa-whatsapp canal-icon"></i>
          <h2>WhatsApp</h2>
          <p>Escríbenos y recibe respuesta en minutos.</p>
        </div>
        <div className="canal-item">
          <i className="fas fa-laptop-code canal-icon"></i>
          <h2>Web</h2>
          <p>Consíguelo fácil y rápido solo agregando al carrito.</p>
        </div>
        <div className="canal-item">
          <i className="fas fa-mobile-alt canal-icon"></i>
          <h2>App</h2>
          <p>Estamos trabando en una App para mejorar tu interacción.</p>
        </div>
        <div className="canal-item">
          <i className="fas fa-store-alt canal-icon"></i>
          <h2>Punto de venta</h2>
          <p>Acércate a nuestros puntos de venta en fisico y virtual.</p>
        </div>
      </div>

      <div className="contacto-section">
        <h2>Hablemos, estamos para ayudarte</h2>
        <div className="contacto-footer">
          <div className="footer-item">
            <i className="fab fa-whatsapp footer-icon"></i>
            <h3>Whatsapp</h3>
            <p>Escríbenos tus dudas e inquietudes</p>
          </div>
          <div className="footer-item">
            <i className="fas fa-envelope footer-icon"></i>
            <h3>Escríbenos</h3>
            <p>Estamos listos para atenderte</p>
          </div>
          <div className="footer-item">
            <i className="fas fa-phone-alt footer-icon"></i>
            <h3>Llámanos</h3>
            <p>Líneas nacionales</p>
            <p>3123249938</p>
            <p>3162467600</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoAditional;
