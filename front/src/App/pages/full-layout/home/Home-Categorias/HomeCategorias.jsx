import React, { useState, useEffect } from 'react';
import { categories } from '../Service/Productos.service'; // Asegúrate de que la ruta esté correcta
import './HomeCategorias.css';

const HomeCategorias = () => {
  const [sliderPosition, setSliderPosition] = useState(0); // Desplazamiento actual del slider

  const totalCategories = categories.length;

  useEffect(() => {
    // Avanzar automáticamente la posición del slider cada 5 segundos (más lento)
    const interval = setInterval(() => {
      setSliderPosition((prevPosition) => {
        // Cuando lleguemos al final, volvemos al principio
        return (prevPosition + 1) % totalCategories; // Se asegura de volver a empezar al llegar al final
      });
    }, 5000); // 5000ms = 5 segundos (despacio)

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [totalCategories]);

  return (
    <div className="home-categorias-container">
      <h2>Categorías</h2>
      <p>Mostrar todas las categorías</p>

      <div className="home-categorias-list" style={{ transform: `translateX(-${sliderPosition * 100}%)` }}>
        {categories.map((category, index) => (
          <div className="home-categoria-item" key={index}>
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategorias;
