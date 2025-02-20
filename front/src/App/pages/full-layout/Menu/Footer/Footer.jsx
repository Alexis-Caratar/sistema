import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img 
            src="/src/assets/img/logos_principal/logo.png" 
            alt="Logo de Mi Tienda" 
          />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/about" className="footer-link">Nosotros</a></li>
            <li><a href="/privacy-policy" className="footer-link">Política de Privacidad</a></li>
            <li><a href="/terms" className="footer-link">Términos y Condiciones</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <p>Síguenos en nuestras redes sociales:</p>
          <ul>
            <li><a href="https://facebook.com" className="social-link">Facebook</a></li>
            <li><a href="https://instagram.com" className="social-link">Instagram</a></li>
            <li><a href="https://twitter.com" className="social-link">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Mi Tienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
