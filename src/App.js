import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BASE_ENDPOINT } from './data/API_Constants.js'
import Content from './components/Content'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: [],
      error: ''
    }
  }


  componentDidMount = () => {
    this.search('cake')
  }

  search = term => {
    fetch(`${BASE_ENDPOINT}&q=${term}`)
      .then(respone => respone.json())
      .then(response => response.hits.length > 0 ? this.setState({ recipes: [...response.hits] }) : this.setState({ error: "No recipes found" }))
      .catch(error => this.setState({ error: error.message }))
  }


  render() {
    return <Content list={this.state.recipes} error={this.state.error} />
  }
}

export default App;
