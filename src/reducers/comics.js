const comics = (state = {comics: null, featuredComic: null}, action) => {
    switch (action.type) {
        case 'ADD_COMICS':
            return {comics: action.comics, featuredComic: state.featuredComic}
        case 'ADD_FEATURED_COMIC':
            return { comics: state.comics, featuredComic: action.featuredComic }
        default:
            return state
    }
}

export default comics