import React, { Component } from 'react'

export default class FilterButton extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.children}</button>
        )
    }
}
