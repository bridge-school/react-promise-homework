import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Credentials } from './config/Config.js'
import Recipe from './components/Recipe.js'
import Error from './components/Error.js'
import SearchBar from './components/SearchBar'

class App extends Component {
  constructor(){
    super();
    this.state = {
      search: "cakes",
      lastSearch: "",
      recipeList: [],
      errorMessage: [],
      hasError: false
    }
  }

  updateSearch = (event) => {
    this.setState({search: event.target.value})
  }

  handleErrors = (response) => {
    //console.log("status: ", response.status)
    //console.log("statusText: ", response.statusText)
    if (this.state.lastSearch.length == 0) {
      throw {message: "Empty search"};
    };
    if (this.state.recipeList.length == 0) {
      throw {message: "No recipes found"};
    };
    return response;
  }

  fetchRecipes = (query) => {
    const endpoint = `${Credentials.URL}?app_id=${Credentials.APP_ID}&app_key=${Credentials.APP_KEY}&q=${query}`
    this.setState({
      lastSearch: this.state.search,
      hasError: false,
      errorMessage: []
    })

    fetch(endpoint)
    .then(response => response.json())
    .then(response => this.setState({recipeList: response.hits}))
    .then(this.handleErrors)
    .catch((error) => this.setState({hasError: true, errorMessage: [error.message], recipeList: []}))
  }

  componentDidMount() {
    this.fetchRecipes(this.state.search);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Edamam Recipes</h1>
        </header>
        <div className="recipe-list">
          <SearchBar updateSearch={this.updateSearch} search={this.fetchRecipes} query={this.state.search}/>
          <p>Recipe List for "{this.state.lastSearch}":</p>
            {this.state.recipeList.map(recipe => <Recipe myRecipe = {recipe} />)}
            {this.state.errorMessage.map(error => <Error message={error} />)}
        </div>
      </div>
    );
  }
}

export default App;


