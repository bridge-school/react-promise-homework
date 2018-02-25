import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BASE_ENDPOINT } from './data/API_Constants.js'
import RecipeList from './components/RecipeList'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: []
    }
  }


  componentDidMount = () => {
    fetch(`${BASE_ENDPOINT}&q=cake`)
      .then(respone => respone.json())
      .then(response => this.setState({ recipes: [...response.hits] }))
  }


  render() {

    return (
      <RecipeList data={this.state.recipes} />
    );
  }
}

export default App;
