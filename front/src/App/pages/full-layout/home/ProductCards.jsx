import React from 'react';

function ProductCards() {
  const products = [
    { id: 1, name: 'Producto 1', price: '$10', image: 'https://via.placeholder.com/250x150?text=Producto+1' },
    { id: 2, name: 'Producto 2', price: '$15', image: 'https://via.placeholder.com/250x150?text=Producto+2' },
    { id: 3, name: 'Producto 3', price: '$20', image: 'https://via.placeholder.com/250x150?text=Producto+3' },
    { id: 4, name: 'Producto 4', price: '$25', image: 'https://via.placeholder.com/250x150?text=Producto+4' },
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
