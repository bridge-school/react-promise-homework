import React from 'react';

export const Cake = ({name,image,url}) => {
    return (    
    <div> 
        <h2> {name} </h2>
       <a href={url} ><img alt ="cake" src = {image} onClick ={url} /></a>
    </div>);
};