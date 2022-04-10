import React from "react";

const Favourites = ({favourites}) => {

    const displayFavourites = favourites.length === 0 ? 'No favourites yet' : favourites.map((quote, index) => <p key={index}>"{quote.content}" -{quote.author}</p>)

    return (
        <>
            <h4>Favourites</h4>
            {displayFavourites}
        </>
    )
}

export default Favourites;