import React, { Component } from "react";
import "./App.css";
import { Recipe } from "./Components/Recipe";
import { Search } from "./Components/Search";

const APP_ID = "fc6f60d3";
const APP_KEY = "bd93df5272c4eb7bc29fd506cea911b9";
const BASE_ENDPOINT = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;

const withErrorHandling = WrappedComponent => ({ error, children }) => {
  return (
    <WrappedComponent>
      {error ? <div className="error-message">Error! {error}</div> : children}
    </WrappedComponent>
  );
};

const ErrorWrapper = withErrorHandling(({ children }) => <div>{children}</div>);

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      recipeList: [],
      query: ""
    };
  }

  callApiWithQuery = query => {
    fetch(`${BASE_ENDPOINT}&q=${query}`)
      .then(response => response.json())
      .then(
        response =>
          response.hits.length > 0
            ? this.setState({ recipeList: [...response.hits], error: null })
            : this.setState({ error: "Nothing to see here!", recipeList: "" })
      )
      .catch(error => this.setState({ error: error.message }));
  };

  componentDidMount() {
    this.callApiWithQuery("cake");
  }

  updateSearch = e => {
    this.setState({ query: e.target.value });
    this.callApiWithQuery(this.state.query);
  };

  render() {
    return (
      <div className="App">
        <Search onChange={this.updateSearch} value={this.state.query} />
        <ErrorWrapper error={this.state.error}>
          {this.state.recipeList &&
            this.state.recipeList.map(recipe => (
              <Recipe
                name={recipe.recipe.label}
                calories={recipe.recipe.calories}
                key={recipe.recipe.url}
              />
            ))}
        </ErrorWrapper>
      </div>
    );
  }
}

export default App;
