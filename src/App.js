import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BASE_ENDPOINT } from './data/API_Constants.js'
import FilterInput from './components/FilterInput'
import FilterButton from './components/FilterButton'
import Content from './components/Content'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: [],
      error: '',
      searchTerm: ''
    }
  }

  defaultSearch = 'cake'

  componentDidMount = () => {
    this.setState({ searchTerm: this.defaultSearch }, () => this.search(this.state.searchTerm))
  }

  setSearchTerm = ev => this.setState({ searchTerm: ev.target.value, error: '', recipes: [] })

  search = term => {
    fetch(`${BASE_ENDPOINT}&q=${term}`)
      .then(respone => respone.json())
      .then(response => response.hits.length > 0 ? this.setState({ recipes: [...response.hits] }) : this.setState({ error: "No recipes found" }))
      .catch(error => this.setState({ error: error.message }))
  }


  render() {
    return (
      <div>
        <FilterInput value={this.state.searchTerm} onChange={this.setSearchTerm} />
        <FilterButton onClick={() => this.search(this.state.searchTerm)}>Search</FilterButton>
        <Content list={this.state.recipes} error={this.state.error} />
      </div>
    )
  }
}

export default App;
