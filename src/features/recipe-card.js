import React from 'react';

export const RecipeCard = ({ recipes }) => {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li> {recipe.recipe.label} {recipe.recipe.calories}
        </li>
      ))}
    </ul>
  );
}; 