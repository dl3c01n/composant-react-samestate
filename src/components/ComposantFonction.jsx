import React, { Component, Fragment, useState } from 'react'

export const ComposantFonction = (props) => {

    const handleClick = () => {
        props.increase();
    }

    return (
        <Fragment>
            <p>{props.compteur}</p>
            <button onClick={handleClick}>{props.texte}</button>
        </Fragment>
    )
}
