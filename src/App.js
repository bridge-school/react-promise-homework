import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Cake } from './components/cake-card';
import { Error } from './components/error';
import { APIRequest } from './components/api-request';

const APP_ID = '647a3750'; 
const APP_KEY = '89aca8b5714d6d7b8972e00b3278b090	'; 
const BASE_ENDPOINT = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=cake`;

class App extends Component {
  constructor(){
    super();
    this.state = {
      cakes: [],
      error : null
    }
  }

  componentDidMount(){
    APIRequest(BASE_ENDPOINT,"GET")
    .then(data => this.setState({cakes:data.hits}))
    .catch(error => this.setState({error:error}));
  };

  onSubmit(){

  };

  render() {
    return (
      <div className="App">
        <div>
          {this.state.error ? <Error/>
            : this.state.cakes.length >= 1 &&            
            <div>
            
            {this.state.cakes.map((cake) => <Cake key ={cake.recipe.image} name = {cake.recipe.label} image = {cake.recipe.image}/> 
            )}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
