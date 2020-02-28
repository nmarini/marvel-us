import React from 'react';

const ComicCard = ({comic}) => {

    return (
        <>
            ComicCard
            {console.log(comic)}
            {/* <h1>{ComicCard.title}</h1>  
            Description:{comic.description ? <p>{comic.description}</p> : "Sorry...no descriptionn available"} */}
        </>
    )
}

export default ComicCard;