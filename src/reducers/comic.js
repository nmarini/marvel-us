const Comics = (state = null, action) => {
    switch (action.type) {
        case 'ADD_COMICS':
            return action.comics
        default:
            return state
    }
}

export default Comics