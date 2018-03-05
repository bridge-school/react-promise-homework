import React, { Component } from 'react';
import {Details} from "./details";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state={
    	view:false
    }   
  }

  changeView = e => this.setState({view:!this.state.view})

  render() {
		return(
			<li className="recipeItem">
				<div className="recipeHeader" onClick={this.changeView}>
					<div className="recipeLabel">{this.props.data.label}</div>
					<div className="calories">{Math.round(this.props.data.totalNutrients.ENERC_KCAL.quantity).toLocaleString()} {this.props.data.totalNutrients.ENERC_KCAL.unit}</div>
				</div>
					<Details view={this.state.view} data={this.props.data}/>
			</li>
		);  	
  }

}

export default ListItem