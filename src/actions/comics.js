// synchronous action creators
export const addComics = comics => {
    return {
        type: "ADD_COMICS",
        comics
    }

};

export const saveComic = (currentUser, comic) => {
    return {
        type: "SAVE_COMIC",
        comic,
        currentUser
    }
};