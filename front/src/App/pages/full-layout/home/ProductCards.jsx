import React, { useState } from 'react';
import './ProductCards.css';

function ProductCards() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Para el carrusel de imágenes
  const [searchQuery, setSearchQuery] = useState(""); // Estado para la búsqueda de productos

  const products = [
    { 
      id: 1, 
      name: 'Camiseta de Manga Larga', 
      price: '$19.99', 
      image: 'https://lukshop.vtexassets.com/arquivos/ids/794185-800-auto?v=638345355246700000&width=800&height=auto&aspect=true',
      description: 'Camiseta de manga larga, cómoda y moderna.',
      moreInfo: 'Disponible en varios colores. Hecha de algodón suave y de alta calidad.',
      images: [
        'https://lukshop.vtexassets.com/arquivos/ids/794185-800-auto?v=638345355246700000&width=800&height=auto&aspect=true',
        'https://lukshop.vtexassets.com/arquivos/ids/794208/36_110E004_MOR191608_4.jpg?v=638345355265370000',
        'https://lukshop.vtexassets.com/arquivos/ids/794185-800-auto?v=638345355246700000&width=800&height=auto&aspect=true',
        'https://lukshop.vtexassets.com/arquivos/ids/794208/36_110E004_MOR191608_4.jpg?v=638345355265370000'
      ]
    },
    { 
      id: 1, 
      name: 'Camiseta de Manga Larga', 
      price: '$19.99', 
      image: 'https://lukshop.vtexassets.com/arquivos/ids/794185-800-auto?v=638345355246700000&width=800&height=auto&aspect=true',
      description: 'Camiseta de manga larga, cómoda y moderna.',
      moreInfo: 'Disponible en varios colores. Hecha de algodón suave y de alta calidad.',
      images: [
        'https://lukshop.vtexassets.com/arquivos/ids/794185-800-auto?v=638345355246700000&width=800&height=auto&aspect=true',
        'https://lukshop.vtexassets.com/arquivos/ids/794208/36_110E004_MOR191608_4.jpg?v=638345355265370000',
        'https://lukshop.vtexassets.com/arquivos/ids/794185-800-auto?v=638345355246700000&width=800&height=auto&aspect=true',
        'https://lukshop.vtexassets.com/arquivos/ids/794208/36_110E004_MOR191608_4.jpg?v=638345355265370000'
      ]
    },
    
  ];

  // Filtrar productos basados en la consulta de búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchQuery(event.target.value); // Actualizar el estado de la búsqueda
  };

  // Función para abrir la modal
  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  // Función para cerrar la modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  // Cambiar la imagen del carrusel
  const nextImage = () => {
    if (selectedProduct && selectedProduct.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct && selectedProduct.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div>
      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />

      {/* Lista de productos */}
      <div className="product-cards">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card" onClick={() => openModal(product)}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">{product.price}</div>
          </div>
        ))}
      </div>

      {/* Modal para mostrar detalles del producto */}
      {modalOpen && selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="carousel">
              <button className="carousel-btn" onClick={prevImage}>‹</button>
              <img
                src={selectedProduct.images[currentImageIndex]}
                alt={selectedProduct.name}
                className="modal-image"
              />
              <button className="carousel-btn" onClick={nextImage}>›</button>
            </div>
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p><strong>Más información:</strong> {selectedProduct.moreInfo}</p>
            <div className="price">{selectedProduct.price}</div>
            <button className="add-to-cart">Agregar al carrito</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCards;
