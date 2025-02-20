import React, { useState } from 'react';
import './Nosotros.css';  // Importamos los estilos personalizados

function Nosotros() {
  // Estado para el formulario de contacto
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí agregarías la lógica para enviar el formulario
  };

  return (
    <div className="nosotros-container">
      <div className="nosotros-header">
        <h1 className="title fade-in">¿Quiénes somos?</h1>
      </div>

      {/* A qué nos dedicamos */}
      <section className="section about-us">
        <div className="section-content fade-in">
          <img
            src="https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/color-fondo-imagen-r.png"
            alt="Moda de ropa"
            className="section-image"
          />
          <div className="section-text">
            <h2>A qué nos dedicamos</h2>
            <p>Somos una tienda en línea especializada en la venta de ropa de moda para hombres y mujeres. Nuestro objetivo es ofrecer una experiencia de compra cómoda, accesible y siempre con los mejores productos.</p>
          </div>
        </div>
      </section>

      {/* Misión */}
      <section className="section mission">
        <div className="section-content fade-in reverse">
          <div className="section-text">
            <h2>Misión</h2>
            <p>Brindar a nuestros clientes ropa de calidad, adaptada a sus estilos, con un excelente servicio de atención al cliente y una experiencia de compra segura y fácil.</p>
          </div>
          <img
            src="https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
            alt="Ropa en línea"
            className="section-image"
          />
        </div>
      </section>

      {/* Visión */}
      <section className="section vision">
        <div className="section-content fade-in">
          <img
            src="https://plus.unsplash.com/premium_photo-1710965560034-778eedc929ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVuZG8lMjBoZXJtb3NvfGVufDB8fDB8fHww"
            alt="Visión"
            className="section-image"
          />
          <div className="section-text">
            <h2>Visión</h2>
            <p>Ser la tienda en línea líder en moda, reconocida por su innovación, calidad y servicio al cliente, expandiendo nuestra presencia en diferentes mercados internacionales.</p>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="section objectives">
        <div className="section-content fade-in reverse">
          <div className="section-text">
            <h2>Objetivos</h2>
            <ul>
              <li>Expandir nuestra oferta de productos de moda cada temporada.</li>
              <li>Mejorar continuamente la experiencia de compra en línea.</li>
              <li>Ampliar nuestra presencia a nivel internacional.</li>
              <li>Garantizar la satisfacción total de nuestros clientes.</li>
            </ul>
          </div>
          <img
            src="https://media.istockphoto.com/id/998081772/es/foto/imagen-de-impresionismo-de-pinturas-de-paisaje-marino-con-fondo-de-sol.jpg?s=612x612&w=0&k=20&c=XqPIymM62GCuWy8CCGqGgLlWi1lgVq5zW4wMUZMLnYM="
            alt="Objetivos"
            className="section-image"
          />
        </div>
      </section>

      {/* Sección de Contacto y Ubicación */}
      <section className="contact-section fade-in">
        <div className="contact-container">
          <div className="row">
            {/* Formulario de contacto */}
            <div className="col-md-6">
              <h2 className="text-center mb-4">Contáctanos</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Enviar</button>
              </form>
            </div>

            {/* Información de contacto adicional */}
            <div className="col-md-6">
              <div className="contact-info">
                <h4>Información de contacto</h4>
                <p><strong>Dirección:</strong> Calle Ficticia 123, Ciudad Ejemplo</p>
                <p><strong>Teléfono:</strong> +123 456 7890</p>
                <p><strong>Email:</strong> contacto@tuecommerce.com</p>

                <h5>Síguenos</h5>
                <div className="social-icons">
                  <a href="https://facebook.com" className="social-icon">Facebook</a>
                  <a href="https://instagram.com" className="social-icon">Instagram</a>
                  <a href="https://twitter.com" className="social-icon">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa de Ubicación */}
        <div className="map-container">
          <h4>Visítanos en</h4>
        
        </div>
      </section>
    </div>
  );
}

export default Nosotros;
