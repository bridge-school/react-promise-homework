import React from 'react';
import searchIcon from './search.png';

export const SearchBar = ({onInputChange, inputValue, placeholder,initializeSearch,fixSearchBar}) => {


	const keyPressHandler = e => {
		if (e.keyCode===13) {initializeSearch()}
	}

	const classNames = fixSearchBar ? "searchBar fixedBar" : "searchBar";

	return(
		<div className={classNames}>
			<input 
				onChange={onInputChange}
				value={inputValue}
				onKeyDown={keyPressHandler}
			/>
			<button onClick={initializeSearch}><img alt="Search" src={searchIcon}/></button>
		</div>
	);
}
