import React, { Component } from 'react';

class SearchBar extends Component {
  handleKeyPress = event => {
    let value = this.textInput.value;
    if (event.key === 'Enter' && value) {
      this.props
        .fetchRecipes(value)
        .then(recipes => this.props.updateRecipes(recipes))
        .catch(e => this.props.updateError(e));
      this.textInput.value = '';
    }
  };

  render() {
    return (
      <input
        autoFocus
        className="inputBox"
        onKeyPress={this.handleKeyPress}
        ref={input => {
          this.textInput = input;
        }}
        type="text"
        placeholder="Type to search for recipe"
        required
      />
    );
  }
}

export default SearchBar;
