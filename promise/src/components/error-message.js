import React from 'react';
import input from './input.png';
import network from './network.png';

export const ErrorMessage = ({error}) => {

	if(error==="network"){
		return(
			<div className="errorMessage">
				<img src={network} alt=""/>
				<p>Sorry, there seems to be a network error. Try again in a while.</p>
			</div>
		)
	}

	else if(error==="input"){
		return(
			<div className="errorMessage">
				<img src={input} alt=""/>
				<p>Sorry, the term you searched didn't return any recipes. Try another term.</p>
			</div>
		)
	}

}