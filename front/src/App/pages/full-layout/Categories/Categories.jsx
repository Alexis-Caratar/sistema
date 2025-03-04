import React, { useState, useEffect } from 'react';
import './Categorias.css';  // Asegúrate de que tengas tu archivo CSS
import { categoriesData } from './Service/Categorias.service'; // Importar desde Categorias.service.ts
import ProductModal from './Modal/ProductModal'; // Importa el componente ProductModal

function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // Estado para la categoría seleccionada
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Cargar las categorías desde el servicio
  useEffect(() => {
    setCategories(categoriesData.categories);
    setSelectedCategory(categoriesData.categories[0]); // Seleccionar la primera categoría por defecto
  }, []);

  // Función para manejar la selección de categoría
  const handleCategorySelect = (categoryId) => {
    const category = categoriesData.categories.find((cat) => cat.id === categoryId);
    setSelectedCategory(category);
  };

  // Función para abrir la modal con el producto seleccionado
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Función para cerrar la modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Función para añadir al carrito
  const addToCart = (product) => {
    // Aquí puedes agregar la lógica para agregar el producto al carrito
    console.log('Producto añadido al carrito:', product);
  };

  return (
    <div className="categories-container">
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

      <div className="products-container">
        {selectedCategory ? (
          <>
            <h3>Productos de {selectedCategory.nombre}</h3>
            <div className="product-cards">
              {selectedCategory.products.map((product) => (
                <div key={product.id} className="product-card">
                  <img src={product.imagen_principal} alt={product.nombre} className="product-image" />
                  <h4>{product.nombre}</h4>
                  <p>{product.descripcion}</p>
                  <div className="price">${product.precio}</div>
                  <button className="view-details-btn" onClick={() => openModal(product)}>
                    Ver detalles
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Selecciona una categoría para ver los productos.</p>
        )}
      </div>

      {/* Mostrar modal cuando se selecciona un producto */}
      {isModalOpen && (
        <ProductModal
          product={selectedProduct}
          onClose={closeModal}
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
}

export default Categories;
