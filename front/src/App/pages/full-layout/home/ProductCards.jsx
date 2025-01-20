import React, { useState } from 'react';
import './ProductCards.css';

function ProductCards() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMoreInfo, setShowMoreInfo] = useState(false); // Estado para controlar el acordeón
  const [cart, setCart] = useState([]); // Carrito de compras
  const [isCartMinimized, setIsCartMinimized] = useState(false); // Estado para minimizar el carrito

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
      ],
      brand: 'Marca X',
      rating: 4,
      availableSizes: ['S', 'M', 'L', 'XL'],
      manufacturing: 'Hecho en China'
    },
    {
      id: 2,
      name: 'Camiseta de Manga Larga',
      price: '$19.99',
      image: 'https://lukshop.vtexassets.com/arquivos/ids/794185-800-auto?v=638345355246700000&width=800&height=auto&aspect=true',
      description: 'Camiseta de manga larga, cómoda y moderna.',
      moreInfo: 'Disponible en varios colores. Hecha de algodón suave y de alta calidad.',
      images: [
        'https://lukshop.vtexassets.com/arquivos/ids/794185-800-auto?v=638345355246700000&width=800&height=auto&aspect=true',
        'https://lukshop.vtexassets.com/arquivos/ids/794208/36_110E004_MOR191608_4.jpg?v=638345355265370000',
      ],
      brand: 'Marca Y',
      rating: 3,
      availableSizes: ['M', 'L'],
      manufacturing: 'Hecho en México'
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
      ],
      brand: 'Marca X',
      rating: 4,
      availableSizes: ['S', 'M', 'L', 'XL'],
      manufacturing: 'Hecho en China'
    },
    {
      id: 2,
      name: 'Camiseta de Manga Larga',
      price: '$19.99',
      image: 'https://lukshop.vtexassets.com/arquivos/ids/794185-800-auto?v=638345355246700000&width=800&height=auto&aspect=true',
      description: 'Camiseta de manga larga, cómoda y moderna.',
      moreInfo: 'Disponible en varios colores. Hecha de algodón suave y de alta calidad.',
      images: [
        'https://lukshop.vtexassets.com/arquivos/ids/794185-800-auto?v=638345355246700000&width=800&height=auto&aspect=true',
        'https://lukshop.vtexassets.com/arquivos/ids/794208/36_110E004_MOR191608_4.jpg?v=638345355265370000',
      ],
      brand: 'Marca Y',
      rating: 3,
      availableSizes: ['M', 'L'],
      manufacturing: 'Hecho en México'
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
      ],
      brand: 'Marca X',
      rating: 4,
      availableSizes: ['S', 'M', 'L', 'XL'],
      manufacturing: 'Hecho en China'
    },
    {
      id: 2,
      name: 'Camiseta de Manga Larga',
      price: '$19.99',
      image: 'https://lukshop.vtexassets.com/arquivos/ids/794185-800-auto?v=638345355246700000&width=800&height=auto&aspect=true',
      description: 'Camiseta de manga larga, cómoda y moderna.',
      moreInfo: 'Disponible en varios colores. Hecha de algodón suave y de alta calidad.',
      images: [
        'https://lukshop.vtexassets.com/arquivos/ids/794185-800-auto?v=638345355246700000&width=800&height=auto&aspect=true',
        'https://lukshop.vtexassets.com/arquivos/ids/794208/36_110E004_MOR191608_4.jpg?v=638345355265370000',
      ],
      brand: 'Marca Y',
      rating: 3,
      availableSizes: ['M', 'L'],
      manufacturing: 'Hecho en México'
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
    setShowMoreInfo(false); // Resetear el estado del acordeón al cerrar el modal
  };

  const toggleMoreInfo = () => {
    setShowMoreInfo(prev => !prev); // Alternar la visibilidad del acordeón
  };

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

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Verificar si el producto ya está en el carrito
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Si el producto ya está en el carrito, aumentamos la cantidad
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Si el producto no está en el carrito, lo agregamos
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    setIsCartMinimized(false); // Aseguramos que el carrito no esté minimizado después de agregar un producto
  };

  const toggleCart = () => {
    setIsCartMinimized((prevState) => !prevState);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />

      <div className="product-cards">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card" onClick={() => openModal(product)}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">{product.price}</div>
            <button onClick={(e) => { e.stopPropagation(); addToCart(product); }} className="add-to-cart">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {/* Modal de carrito */}
      {!isCartMinimized && (
        <div className="cart-modal">
          <button onClick={toggleCart} className="minimize-btn">Minimizar</button>
          <h2>Carrito</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div>{item.name}</div>
                <div>{item.price}</div>
                <div>Cantidad: {item.quantity}</div>
              </li>
            ))}
          </ul>
          <button className="checkout-btn">Ir a pagar</button>
        </div>
      )}

      {/* Modal del producto */}
      {modalOpen && selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="modal-body">
              <div className="image-gallery">
                <div className="small-images">
                  {selectedProduct.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Imagen ${index}`}
                      className={currentImageIndex === index ? 'active' : ''}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
                <div className="large-image">
                  <img
                    src={selectedProduct.images[currentImageIndex]}
                    alt={selectedProduct.name}
                    className="modal-image"
                  />
                </div>
              </div>

              <div className="product-info">
                <h2>{selectedProduct.name}</h2>
                <div className="brand">Marca: {selectedProduct.brand}</div>
                <div className="description">{selectedProduct.description}</div>
                <div className="price">{selectedProduct.price}</div>

                <div className="rating">
                  <button className="like-btn">❤️</button>
                  <span className="stars">
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className={`star ${index < selectedProduct.rating ? 'filled' : ''}`}>
                        ★
                      </span>
                    ))}
                  </span>
                </div>

                <div className="more-info">
                  <button onClick={toggleMoreInfo}>
                    {showMoreInfo ? 'Ver menos especificaciones' : 'Ver más especificaciones'}
                  </button>
                  {showMoreInfo && (
                    <div className="more-details">
                      <p>{selectedProduct.moreInfo}</p>
                      <p>Tamaños disponibles: {selectedProduct.availableSizes.join(', ')}</p>
                      <p>Fabricado en: {selectedProduct.manufacturing}</p>
                    </div>
                  )}
                </div>

                <div className="quantity">
                  <label>Cantidad:</label>
                  <input type="number" min="1" max="10" defaultValue="1" />
                </div>
                <button onClick={(e) => { e.stopPropagation(); addToCart(selectedProduct); }} className="add-to-cart">Agregar al carrito</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCards;
