import React from 'react';

export const Input = ({onInputChange, inputValue}) => {
    return <input onChange = {onInputChange} value={inputValue}/>;
};