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

export const addFeaturedComic = (featuredComic) => {
    return {
        type: 'ADD_FEATURED_COMIC',
        featuredComic
    }
}

export const removeFeaturedComic = () => {
    return {
        type: 'REMOVE_FEATURED_COMIC'
    }
}

// asynchronous action creators
export const getComics = () => {

    let md5 = require('md5');
    let ts = Date.now;
    let private_key = `${process.env.REACT_APP_API_PRIVATE_KEY}`;
    let api_key = `${process.env.REACT_APP_API_KEY}`;
    const hash = md5(ts + private_key + api_key)


    
    let resource_url = `https://gateway.marvel.com:443/v1/public/comics?limit=100&ts=${ts}&apikey=ade62a41fa2b334dd5437904642782c9&hash=${hash}` 

    return dispatch => {
        return fetch(resource_url)
            .then(res => res.json())
            .then(resp => {
                const comics = resp.data.results;
                if (resp.error) {
                    alert(resp.errors)
                } else {
                    dispatch(addComics(comics))
                }
            }
            )
    }
}