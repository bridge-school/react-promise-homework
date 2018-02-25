import React from 'react';

export const Button = ({name, onClick}) => { 
    return <button className="btn btn-primary" onClick = {onClick}> {name} </button>;
};
