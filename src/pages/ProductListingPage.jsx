import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

function ProductListingPage() {
  const products = useSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All', 
    ...new Set(products.map(product => product.category))
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="product-listing-page">
      <Header />
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;