import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Credentials } from './config/Config.js'
import Recipe from './components/Recipe.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      recipeList: []
    }
  }

  componentDidMount() {
    const q = 'cakes'
    const endpoint = `${Credentials.URL}?app_id=${Credentials.APP_ID}&app_key=${Credentials.APP_KEY}&q=${q}`
    
    const fetchRecipes = () =>
      fetch(endpoint)
      .then(response => response.json())
      .then(response => this.setState({recipeList: response.hits}))
      .catch( (error) => console.log(error))

      fetchRecipes();
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="recipe-list">
          <p>Recipe List:</p>
          {this.state.recipeList.map(recipe => <Recipe myRecipe = {recipe} />)}
        </div>
      </div>
    );
  }
}

export default App;
