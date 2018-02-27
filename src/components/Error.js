import React, { Component } from 'react';

class Error extends Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log("estou no erro")
        return (
            <div>
               <p>Ops... we got an error: {this.props.message}</p>
            </div>
        )
    }
}


export default Error;

