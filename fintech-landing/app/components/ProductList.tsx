'use client';

import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import ProductFilter from './ProductFilter';
import { useFilteredProducts } from '../hooks/useFilteredProducts';

export const ProductList = () => {
  const { selectedCategory, setSelectedCategory, categories, filteredProducts } = useFilteredProducts();

  const [loading, setLoading] = useState(false);

  // Mostrar loading al cambiar de categoría
  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); // duración del "loading" en ms

      return () => clearTimeout(timer);
    }
  }, [selectedCategory]);

  return (
    <div>
      <ProductFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-opacity-75"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <ProductCard key={prod.id || prod.nombre} product={prod} />
          ))}
        </div>
      )}
    </div>
  );
};
