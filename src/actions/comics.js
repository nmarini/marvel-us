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

// asynchronous action creators
export const getComics = () => {

    // let api_key = `${process.env.REACT_APP_API_KEY}`;
    let resource_url = `https://gateway.marvel.com:443/v1/public/comics?apikey=ade62a41fa2b334dd5437904642782c9`

    return dispatch => {
        return fetch(resource_url)
            .then(res => res.json())
            .then(comics => {
                console.log(comics)
                // if (resp.error) {
                //     alert(resp.errors)
                // } else {
                //     dispatch(addComics(resp.data))
                // }
            }
            )
    }
}