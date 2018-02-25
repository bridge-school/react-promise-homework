import React, { Component } from 'react'

export default class RecipeCard extends Component {
    render() {
        const { label, calories } = this.props.data.recipe

        return (
            <li>
                <div><label>Recipe: </label>{label}</div>
                <div><label>Calories: </label>{Math.round(calories * 100) / 100}</div>
            </li>
        )
    }
}
