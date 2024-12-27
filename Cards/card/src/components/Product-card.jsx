// src/ProductCard.js
import React from 'react';

const ProductCard = ({ title, price, description, image, rating }) => {
  return (

    
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">${price.toFixed(2)}</p>
      <p className="product-rating">Rating: {rating.rate} ({rating.count} reviews)</p>
    </div>
  );
};

export default ProductCard;