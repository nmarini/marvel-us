import React, { Component } from 'react';
import CharacterCard from './component/CharacterCard.js';

class CharacterContainer extends Component {

    constructor() {
        super()
        this.state = {
            featuredCharacter: ''
        }

    }

    render() {
        return (
            <>
                CharacterContainer
                <CharacterCard character={this.featuredCharacter}/>
            </>
        )
    }

}

export default CharacterContainer;