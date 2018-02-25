import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BASE_ENDPOINT } from './data/API_Constants.js'
import RecipeList from './components/RecipeList'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: [],
      error: ''
    }
  }


  componentDidMount = () => {
    fetch(`${BASE_ENDPOINT}&q=cake`)
      .then(respone => respone.json())
      .then(response => response.hits.length > 0 ? this.setState({ recipes: [...response.hits] }) : this.setState({ error: "No recipes found" }))
      .catch(error => this.setState({ error: error.message }))
  }


  render() {
    console.log(this.state)
    if (this.state.recipes.length > 0) {
      return (
        <RecipeList data={this.state.recipes} />
      );
    }
    else {
      return (
        <div>{this.state.error}</div>
      )
    }
  }
}

export default App;
