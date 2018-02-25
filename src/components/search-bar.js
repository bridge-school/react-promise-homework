import React from 'react';

export const SearchBar = ({onChange, value}) => {
     return <input value = {value} onChange = {(e) => onChange(e)}/>;
};