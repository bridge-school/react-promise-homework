import React from 'react';

export const EachRecipe = ({ recipe }) => {
  return (
    <li>
      {recipe.name} {recipe.calories}
    </li>
  );
};
