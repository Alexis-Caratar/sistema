import React from 'react';
import '../../../assets/css/Menu/Footer.css'; // Añade estilos específicos si es necesario

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container-fluid">
        <div className="row text-muted justify-content-between align-items-center">
         
          <div className="col-8 text-end">
          <p className="mb-0">
              <strong>
                <a className="text-muted" href="https://adminkit.io/" target="_blank" rel="noopener noreferrer">
                  Sistema de información para ecommerce
                </a>
              </strong> &copy; 2024 by @Alexis-Caratar
            </p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="text-muted" href="https://adminkit.io/" target="_blank" rel="noopener noreferrer">Soporte</a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted" href="https://adminkit.io/" target="_blank" rel="noopener noreferrer">Centro de Ayuda</a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted" href="https://adminkit.io/" target="_blank" rel="noopener noreferrer">Privacidad</a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted" href="https://adminkit.io/" target="_blank" rel="noopener noreferrer">Términos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
