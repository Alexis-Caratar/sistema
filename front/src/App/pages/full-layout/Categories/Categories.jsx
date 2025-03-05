import React, { useState, useEffect } from 'react';
import './Categorias.css';
import { categoriesData } from './Service/Categorias.service';
import ProductModal from './Modal/ProductModal';

function Categories({ addToCart }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setCategories(categoriesData.categories);
    setSelectedCategory(categoriesData.categories[0]); // Establecer la primera categoría como seleccionada
  }, []);

  const handleCategorySelect = (categoryId) => {
    const category = categoriesData.categories.find((cat) => cat.id === categoryId);
    setSelectedCategory(category);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="categories-container">
      {/* Sidebar de categorías */}
      <div className="categories-sidebar">
        <h3>Categorías</h3>
        <ul className="category-list">
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`category-item ${selectedCategory?.id === category.id ? 'active' : ''}`}
            >
              {category.nombre}
            </li>
          ))}
        </ul>
      </div>

      {/* Contenedor de productos */}
      <div className="products-container">
        {selectedCategory ? (
          <>
            <h3>Productos de {selectedCategory.nombre}</h3>
            <div className="product-cards">
              {selectedCategory.products.map((product) => (
                <div key={product.id} className="product-card">
                  <img
                    src={product.imagen_principal}
                    alt={product.nombre}
                    className="product-image"
                  />
                  <h4>{product.nombre}</h4>
                  <p>{product.descripcion}</p>
                  <div className="precio">
                    {new Intl.NumberFormat('es-CO').format(product.precio)}
                  </div>
                  <button
                    className="view-details-btn"
                    onClick={() => openModal(product)}
                  >
                    Ver detalles
                  </button>
                  <button
                    className="principal-card"
                    onClick={() => addToCart(product)}  // Usar la función addToCart pasada por prop
                  >
                    Añadir al carrito
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Selecciona una categoría para ver los productos.</p>
        )}
      </div>

      {/* Mostrar el modal cuando se selecciona un producto */}
      {isModalOpen && (
        <ProductModal
          product={selectedProduct}
          onClose={closeModal}
          onAddToCart={addToCart}  // Pasar la función addToCart también al modal
        />
      )}
    </div>
  );
}

export default Categories;
