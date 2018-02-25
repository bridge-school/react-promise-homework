import React, { Component } from 'react'
import RecipeList from './RecipeList'
import Error from './Error'

export default class Content extends Component {
    render() {
        const { list, error } = this.props

        if (list.length > 0) {
            return (
                <RecipeList data={list} />
            );
        }
        else {
            return (
                <Error message={error} />
            )
        }
    }
}
