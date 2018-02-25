import React, { Component } from 'react'
import RecipeCard from './RecipeCard'

export default class RecipeList extends Component {
    render() {
        return (
            <div>
                <ul>{this.props.data.map((item, index) => <RecipeCard data={item} />)}</ul>
            </div>
        )
    }
}
