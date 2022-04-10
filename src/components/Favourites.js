import React from "react";
import './Favourites.css';

const Favourites = ({favourites}) => {

    const displayFavourites = favourites.length === 0 ? 'No favourites yet' : favourites.map((quote, index) => <p key={index} className="favourites">"{quote.content}" -{quote.author}</p>)

    return (
        <>
            <div className="container">
                <h4>Favourites</h4>
                {displayFavourites}
            </div>
        </>
    )
}

export default Favourites;