import React from 'react';

export const Cake = ({name,image}) => {
    return (    
    <div> 
        <h2> {name} </h2>
        <img alt ="cake" src = {image}/>
    </div>);
};