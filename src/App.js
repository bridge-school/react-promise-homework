import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const APP_ID = '647a3750'; 
const APP_KEY = '89aca8b5714d6d7b8972e00b3278b090	'; 
const BASE_ENDPOINT = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=cake`;

class App extends Component {
  componentDidMount(){
    fetch(BASE_ENDPOINT)
    .then(res => res.json())
    .then(data => console.log(data))
  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
