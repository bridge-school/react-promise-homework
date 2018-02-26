import React, { Component } from "react";
import "./App.css";
import { Recipe } from "./Components/Recipe";

const APP_ID = "fc6f60d3";
const APP_KEY = "bd93df5272c4eb7bc29fd506cea911b9	";
const BASE_ENDPOINT = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;

const withErrorHandling = WrappedComponent => ({ error, children }) => {
  return (
    <WrappedComponent>
      {error && <div className="error-message">Error! {error}</div>}
      {children}
    </WrappedComponent>
  );
};

const DivWithErrorHandling = withErrorHandling(({ children }) => (
  <div>{children}</div>
));

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      recipeList: [],
      searchText: ""
    };
  }

  componentDidMount() {
    fetch(`${BASE_ENDPOINT}&q=cake`)
      .then(response => response.json())
      .then(
        response =>
          response.hits.length > 0
            ? this.setState({ recipeList: [...response.hits] })
            : this.setState({ error: "No recipes found" })
      )
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    return (
      <div className="App">
        <DivWithErrorHandling error={this.state.error}>
          <div className="recipe-list">
            {this.state.recipeList.map(recipe => (
              <Recipe
                name={recipe.recipe.label}
                calories={recipe.recipe.calories}
                key={recipe.recipe.calories}
              />
            ))}
          </div>
        </DivWithErrorHandling>
      </div>
    );
  }
}

export default App;
