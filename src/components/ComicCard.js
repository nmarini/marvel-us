import React from '/.react'

const ComicCard = ({comic}) => {

    return (
        <>
            
            <h1>{ComicCard.title}</h1>  
            Description:{comic.description ? <p>{comic.description}</p> : "Sorry...no descriptionn available"}
        </>
    )
}

export default ComicCard;