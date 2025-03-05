import React, { useState } from 'react';
import './ProductModal.css';  // Asegúrate de que el archivo CSS esté incluido

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const nextImage = () => {
    if (currentImageIndex < product.imagenes_adicionales.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleImageClick = () => {
    setIsImageExpanded(!isImageExpanded);
  };

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
      );
    }
    return stars;
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <button className="close-btn" onClick={onClose}>X</button>
        </div>

        <div className="modal-body">
          <div className="product-container">
            {/* Imagen */}
            <div className="modal-image-container">
              {product.imagenes_adicionales.length > 1 && (
                <>
                  <button className="image-nav prev" onClick={prevImage}>←</button>
                  <img 
                    src={product.imagenes_adicionales[currentImageIndex]} 
                    alt={product.nombre} 
                    className={`product-modal-image ${isImageExpanded ? 'expanded' : ''}`} 
                    onClick={handleImageClick} 
                  />
                  <button className="image-nav next" onClick={nextImage}>→</button>
                </>
              )}
              {product.imagenes_adicionales.length === 1 && (
                <img 
                  src={product.imagenes_adicionales[0]} 
                  alt={product.nombre} 
                  className={`product-modal-image ${isImageExpanded ? 'expanded' : ''}`} 
                  onClick={handleImageClick} 
                />
              )}
            </div>

            {/* Detalles del producto */}
            <div className="product-details">
              <h2>{product.nombre}</h2>
              <p className="product-description">{product.descripcion}</p>

              <div className="product-info-container">
                <div className="product-info-left">
                  <div><strong>Cantidad:</strong> {product.cantidad}</div>
                  <div><strong>Tamaño:</strong> {product.tamano}</div>
                  <div><strong>Color:</strong> {product.color}</div>
                  <div><strong>Marca:</strong> {product.marca}</div>
                  <div><strong>Material:</strong> {product.material}</div>
                  <div><strong>Estilo:</strong> {product.estilo}</div>
                  <div><strong>Temporada:</strong> {product.temporada}</div>
                </div>

                <div className="product-info-right">
                  <div className="product-rating">
                    <strong>Valoración:</strong>
                    <div>{renderStars(product.valoracion)}</div>
                  </div>
                  <div className="precio">${new Intl.NumberFormat('es-CO').format(product.precio)}</div>
                </div>
              </div>

              <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
