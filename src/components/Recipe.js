import React, { Component } from 'react';

class Recipe extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="Recipe">
                <p>Name: {this.props.myRecipe.recipe.label} - Calories: {Math.floor(this.props.myRecipe.recipe.calories)}</p>
            </div>
        )
    }
}


export default Recipe;

