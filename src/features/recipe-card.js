import React, { Component } from 'react';
import { Recipe } from './recipe';

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const RecipeCard = ({ searchTerm, recipes }) => {
  return (
    
    <table>
      <tr>
        <th align='left'>{capitalizeFirstLetter(searchTerm)} Recipe Names</th>
        <th>Calories</th>
      </tr>
      {recipes.map(recipe => <Recipe 
        label = {recipe.recipe.label}
        calories = {recipe.recipe.calories} />)}
    </table>
  );
}; 