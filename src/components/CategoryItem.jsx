// CategoryGrid.js
import React from 'react';

// Reusable Category Item Component
const CategoryItem = ({ category, onClick }) => {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg cursor-pointer"
      onClick={() => onClick(category.id)}
    >
      <img src={category.image} alt={category.name} className="h-48 object-contain mb-2" />
    </div>
  );
};

// Reusable Grid Component
const CategoryGrid = ({ categories, onCategoryClick }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} onClick={onCategoryClick} />
      ))}
    </div>
  );
};

export default CategoryGrid;
