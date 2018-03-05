import React from 'react';

const Recipe = (props) => (
    <p key={props.myRecipe.recipe.label} >Name: {props.myRecipe.recipe.label} - Calories: {Math.floor(props.myRecipe.recipe.calories)}</p>
)

export default Recipe;

