import React from 'react';
import { EachRecipe } from './EachRecipe.js';

export const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map((recipe, index) => (
        <EachRecipe recipe={recipe} key={index} />
      ))}
    </ul>
  );
};
