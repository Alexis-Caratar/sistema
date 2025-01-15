import React from 'react';
import './ProductCards.css'

function ProductCards() {
  const products = [
    { id: 1, name: 'Producto 1', price: '$10', image: 'https://www.patprimo.com/on/demandware.static/-/Sites-PatPrimo-Library/default/dw4cb66b42/images/home/2025/01/Ropa-de-moda-patprimo-desktop-home-1-ene-25-3.webp' },
    { id: 2, name: 'Producto 2', price: '$15', image: 'https://www.patprimo.com/on/demandware.static/-/Sites-PatPrimo-Library/default/dw4cb66b42/images/home/2025/01/Ropa-de-moda-patprimo-desktop-home-1-ene-25-3.webp' },
    { id: 3, name: 'Producto 3', price: '$20', image: 'https://www.patprimo.com/on/demandware.static/-/Sites-PatPrimo-Library/default/dw4cb66b42/images/home/2025/01/Ropa-de-moda-patprimo-desktop-home-1-ene-25-3.webp' },
    { id: 4, name: 'Producto 4', price: '$25', image: 'https://www.patprimo.com/on/demandware.static/-/Sites-PatPrimo-Library/default/dw4cb66b42/images/home/2025/01/Ropa-de-moda-patprimo-desktop-home-1-ene-25-3.webp' },
    { id: 1, name: 'Producto 1', price: '$10', image: 'https://www.patprimo.com/on/demandware.static/-/Sites-PatPrimo-Library/default/dw4cb66b42/images/home/2025/01/Ropa-de-moda-patprimo-desktop-home-1-ene-25-3.webp' },
    { id: 2, name: 'Producto 2', price: '$15', image: 'https://www.patprimo.com/on/demandware.static/-/Sites-PatPrimo-Library/default/dw4cb66b42/images/home/2025/01/Ropa-de-moda-patprimo-desktop-home-1-ene-25-3.webp' },
    { id: 3, name: 'Producto 3', price: '$20', image: 'https://www.patprimo.com/on/demandware.static/-/Sites-PatPrimo-Library/default/dw4cb66b42/images/home/2025/01/Ropa-de-moda-patprimo-desktop-home-1-ene-25-3.webp' },
    { id: 4, name: 'Producto 4', price: '$25', image: 'https://www.patprimo.com/on/demandware.static/-/Sites-PatPrimo-Library/default/dw4cb66b42/images/home/2025/01/Ropa-de-moda-patprimo-desktop-home-1-ene-25-3.webp' },
    { id: 1, name: 'Producto 1', price: '$10', image: 'https://www.patprimo.com/on/demandware.static/-/Sites-PatPrimo-Library/default/dw4cb66b42/images/home/2025/01/Ropa-de-moda-patprimo-desktop-home-1-ene-25-3.webp' },
    { id: 2, name: 'Producto 2', price: '$15', image: 'https://www.patprimo.com/on/demandware.static/-/Sites-PatPrimo-Library/default/dw4cb66b42/images/home/2025/01/Ropa-de-moda-patprimo-desktop-home-1-ene-25-3.webp' },
    { id: 3, name: 'Producto 3', price: '$20', image: 'https://www.patprimo.com/on/demandware.static/-/Sites-PatPrimo-Library/default/dw4cb66b42/images/home/2025/01/Ropa-de-moda-patprimo-desktop-home-1-ene-25-3.webp' },
    { id: 4, name: 'Producto 4', price: '$25', image: 'https://www.patprimo.com/on/demandware.static/-/Sites-PatPrimo-Library/default/dw4cb66b42/images/home/2025/01/Ropa-de-moda-patprimo-desktop-home-1-ene-25-3.webp' },
    { id: 1, name: 'Producto 1', price: '$10', image: 'https://www.patprimo.com/on/demandware.static/-/Sites-PatPrimo-Library/default/dw4cb66b42/images/home/2025/01/Ropa-de-moda-patprimo-desktop-home-1-ene-25-3.webp' },
    { id: 2, name: 'Producto 2', price: '$15', image: 'https://www.patprimo.com/on/demandware.static/-/Sites-PatPrimo-Library/default/dw4cb66b42/images/home/2025/01/Ropa-de-moda-patprimo-desktop-home-1-ene-25-3.webp' },
    { id: 3, name: 'Producto 3', price: '$20', image: 'https://www.patprimo.com/on/demandware.static/-/Sites-PatPrimo-Library/default/dw4cb66b42/images/home/2025/01/Ropa-de-moda-patprimo-desktop-home-1-ene-25-3.webp' },
    { id: 4, name: 'Producto 4', price: '$25', image: 'https://www.patprimo.com/on/demandware.static/-/Sites-PatPrimo-Library/default/dw4cb66b42/images/home/2025/01/Ropa-de-moda-patprimo-desktop-home-1-ene-25-3.webp' },

  ];

  return (
    <div className="product-cards">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Descripción del producto.</p>
          <div className="price">{product.price}</div>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
