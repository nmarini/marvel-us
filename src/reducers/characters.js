const characters = (state = { characters: null, featuredCharacter: null }, action) => {
    switch (action.type) {
        case 'ADD_CHARACTERS':
            return { characters: action.characters, featuredCharacter: state.featuredCharacter }
        case 'ADD_FEATURED_CHARACTER':
            return { characters: state.characters, featuredCharacter: action.featuredCharacter }
        default:
            return state
    }
}

export default characters