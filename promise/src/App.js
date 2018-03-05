import React, { Component } from 'react';
import {Header} from "./components/header";
import {SearchBar} from "./components/search-bar";
import {List} from "./components/list";

const APP_ID = '6d8762c4'; 
const APP_KEY = 'ded0f48f5bf62332e488f4731ad84dfb';
const BASE_ENDPOINT = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=50`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      searchTerm:"garlic",
      recipes:[],
      error:"",
      loading:false,
      fixSearchBar:false,
      toggleInfo:false
    }   
  }

  componentDidMount() {
    this.recipeSearch();
    window.addEventListener("scroll", this.monitorScroll);
  }

  monitorScroll = e => e.target.scrollingElement.scrollTop > 196 ? this.setState({fixSearchBar:true}) : this.setState({fixSearchBar:false})

  updateSearchTerm = e => this.setState({searchTerm:e.target.value});

  recipeSearch = e => {
    this.setState({error:""});
    this.setState({loading:true});
    if (this.state.searchTerm.length>0){
      fetch(`${BASE_ENDPOINT}&q=${this.state.searchTerm}`)
      .then(response => {
        if(!response.ok) {
          this.setState({loading:false});
          this.setState({error:"network"})
        } else {          
          this.setState({loading:false});
          return response.json();
        }
      })
      .then(data => {
        this.setState( {recipes:data.hits.map(hit => hit.recipe)} );
        if (this.state.recipes.length === 0) {this.setState({error:"input"})}
      })
      .catch(error => {
        this.setState({error:"network"});
        this.setState({loading:false});
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header 
          showInfo={e => this.setState({toggleInfo:true})}
          hideInfo={e => this.setState({toggleInfo:false})}
          infoView={this.state.toggleInfo}
        >
          Recipe Search
        </Header>
        <SearchBar
          inputValue={this.state.searchTerm}
          onInputChange={this.updateSearchTerm}
          initializeSearch={this.recipeSearch}
          fixSearchBar={this.state.fixSearchBar}
        />
        <List 
          recipes={this.state.recipes} 
          error={this.state.error}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default App;
