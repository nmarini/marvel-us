const comics = (state = {list: null, featuredComic: null}, action) => {
    switch (action.type) {
        case 'ADD_COMICS':
            return {list: action.comics, featuredComic: state.featuredComic}
        case 'ADD_FEATURED_COMIC':
            return { list: state.comics, featuredComic: action.featuredComic }
        default:
            return state
    }
}

export default comics