import React, { Component } from 'react';
import {RecipeCard} from './features/recipe-card.js';
import {Header} from './components/header.js';
import {Input} from './components/input.js';
import {Button} from './components/button.js';
import './App.css';

const APP_ID = 'd1b52cd4'; // your app id here, provided to you when you sign up
const APP_KEY = '04041818465822777105a1e7de33699c'; // your app key here, provided to you when you sign up

// this would be what I would make for the final URL
const BASE_ENDPOINT = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=cake`;
// an example API request with a cake query would be
// `${BASE_ENDPOINT}&q=cake`
// use this to fetch data




class App extends Component {

  constructor() {
    super();
    this.state = {
      searchTerm: 'cake',
      recipeList: [],
      error:"",
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
      .catch(function(error){
        this.setState({ error: error.message })
      });
  }
  saveSearchTerm = (event) => this.setState({ searchTerm: event.target.value});
  
  render() {
    return (
      <div>
        <Header>CAKKKEEESSSS!!!!</Header>
        <Input
          onInputChange={this.saveSearchTerm}/>
        <Button>Search</Button>
        <RecipeCard
          recipes = {this.state.recipeList}/>
      </div>
      

    );
  }
}

export default App;
