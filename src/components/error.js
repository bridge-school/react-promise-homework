import React from 'react';

export const Error = ({error}) => {
    return <div>
        <h1>{error.message}</h1>
    </div>
}