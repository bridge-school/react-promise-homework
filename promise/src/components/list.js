import React from 'react';
import ListItem from './list-item';
import {ErrorMessage} from './error-message';
import loader from './orange.svg';

export const List = ({recipes, error, loading}) => {
	if (loading) {
		return (
			<div className="loader"> 
				<img src={loader} className="loadingSpinner" alt="Loading..."/> 
			</div>
		);
	}

	else if(error){return(<ErrorMessage error={error}/>)}

	else {		
		const recipeItems = recipes.map(recipe => <ListItem data={recipe} key={recipe.uri}/>);	
		return(
			<ul className="recipeList">{recipeItems}</ul>
		);			
	}
}