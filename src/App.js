import React, { Component } from 'react';
import './styles/App.css';
import { RecipeList } from './RecipeList.js';
import SearchBar from './SearchBar.js';
import { Error } from './Error.js';

const app_id = process.env.REACT_APP_APP_ID;
const app_key = process.env.REACT_APP_APP_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      recipes: []
    };
  }

  fetchRecipes = (foodItem = 'cake') => {
    let recipeUrl = `https://api.edamam.com/search?&app_id=${app_id}&app_key=${app_key}&q=${foodItem}`;
    return new Promise((res, rej) => {
      return fetch(recipeUrl)
        .then(res => res.json())
        .then(
          value => {
            if (value.hits.length === 0) {
              rej('No recipe found!');
            } else {
              const recipes = value.hits.map(foodItem => ({
                name: foodItem.recipe.label,
                calories: Math.round(foodItem.recipe.calories)
              }));
              res(recipes);
            }
          },
          error => {
            rej('Oops, something went wrong!');
            throw error;
          }
        );
    });
  };

  componentDidMount() {
    this.fetchRecipes()
      .then(recipes => {
        this.setState({ recipes });
      })
      .catch(e => this.setState({ error: e }));
  }

  updateError = error => {
    this.setState({ error });
  };

  updateRecipes = recipes => {
    this.setState({ recipes });
  };

  render() {
    return (
      <div className="App">
        {this.state.error && <Error error={this.state.error} />}
        <SearchBar
          fetchRecipes={this.fetchRecipes}
          updateError={this.updateError}
          updateRecipes={this.updateRecipes}
        />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
