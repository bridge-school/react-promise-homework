import React from 'react';

export const Recipe = ({ recipeList }) => {
    return (
        recipeList.map(thing => {
            return <li>{ thing.recipe.label } Calories: {thing.recipe.calories} </li>
        }
          )
    )
};