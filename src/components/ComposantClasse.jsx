import React, { Component, Fragment } from 'react'

export default class ComposantClasse extends Component {


    handleClick = () => {
        this.props.increase();
    }

    render() {
        return (
            <Fragment>
                <p>{this.props.compteur}</p>
                <button onClick={this.handleClick}>{this.props.texte}</button>
            </Fragment>
        )
    }
}
