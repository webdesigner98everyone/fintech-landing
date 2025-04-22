// hooks/useFilteredProducts.ts
import { useState } from 'react';
import products from '../data/products.json';
import { Product } from '../types';

export const useFilteredProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Extraer categorías únicas desde "categoria", filtrando nulos o vacíos
  const categories = Array.from(
    new Set(
      (products as Product[])
        .map((p) => p.categoria)
        .filter((cat) => cat && cat.trim() !== '')
    )
  );

  // Filtrar productos según la categoría seleccionada
  const filteredProducts =
    selectedCategory === 'all'
      ? (products as Product[])
      : (products as Product[]).filter((p) => p.categoria === selectedCategory);

  return {
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredProducts,
  };
};
