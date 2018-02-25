import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Cake } from './components/cake-card';
import { Error } from './components/error';
import { APIRequest } from './components/api-request';
import { Button } from './components/button';
import { SearchBar } from './components/search-bar';

const APP_ID = '647a3750'; 
const APP_KEY = '89aca8b5714d6d7b8972e00b3278b090	'; 
const BASE_ENDPOINT = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;

class App extends Component {
  constructor(){
    super();
    this.state = {
      error : null,
      cakes : [],
      searchText : ""
    }
  }

  onFulfilled = (data) =>{
    this.setState({cakes:data.hits})
  }
  onRejected = (error) => {
    console.log(error)
    this.setState({error:error})
  }

  componentDidMount(){
    APIRequest(BASE_ENDPOINT,"&q=cake","GET")
    .then(res => res.json(), this.onRejected)
    .then(this.onFulfilled)
    .catch(this.onRejected);
  };


  onClick = () => {
    APIRequest(BASE_ENDPOINT,`&q=${this.state.searchText}`,"GET")
    .then(res => res.json(), this.onRejected)
    .then(this.onFulfilled)
    .catch(this.onRejected);
  };
  onUpdateTextField = (e) => {
    this.setState({searchText: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>FOOD 🍕 🍰 🥗</h1>
          <h4> Search a food type below </h4>
          {this.state.error ? <Error error = {this.state.error}/>
            : ( this.state.cakes.length >= 1 || this.state.cakes.length ==0 && !this.state.error) &&            
            <div>
            <SearchBar onChange = {this.onUpdateTextField} value = {this.state.searchText} />
            <Button name="Submit" onClick = {this.onClick}/>  
            {this.state.cakes.length == 0 ? <p> Your search returned no results, please search again ☺️</p> 
            : this.state.cakes.map((cake) => <Cake 
            key ={cake.recipe.image} 
            name = {cake.recipe.label} 
            image = {cake.recipe.image}
            recipeUrl = {cake.recipe.url}/>)}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
