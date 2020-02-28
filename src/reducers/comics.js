const comics = (state = {list: null, featuredComic: null}, action) => {
    switch (action.type) {
        case 'ADD_COMICS':
            return Object.assign({}, state, {list: action.comics}) 
        case 'ADD_FEATURED_COMIC':
            return Object.assign({}, state, { featuredComic: action.featuredComic })
        case 'REMOVE_FEATURED_COMIC':
            return Object.assign({}, state, { featuredComic: null })
        default:
            return state
    }
}

export default comics