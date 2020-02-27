const characters = (state = { list: null, featuredCharacter: null }, action) => {
    switch (action.type) {
        case 'ADD_CHARACTERS':
            return { list: action.characters, featuredCharacter: state.featuredCharacter }
        case 'ADD_FEATURED_CHARACTER':
            return { list: state.characters, featuredCharacter: action.featuredCharacter }
        default:
            return state
    }
}

export default characters