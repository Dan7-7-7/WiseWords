import React from "react";

const QuoteButtons = ({next, previous, quotes, quote, handleClick}) => {

    const needNextButton = quotes.length > 1;
    const needPreviousButton = quotes.indexOf(quote) !== 0;
    const needFavouritesButton = quote.content !== '';

    let favouritesButton, previousButton, nextButton;

    if(needPreviousButton){
        previousButton = <button onClick={previous}>Previous</button>
    }

    if(needNextButton){
        nextButton = <button onClick={next}>Next</button>
    }

    if(needFavouritesButton){
        favouritesButton = <button onClick={handleClick}>Add to Favourites</button>
    }

    return (
        <>
            {favouritesButton}
            {previousButton}
            {nextButton}
        </>
    )
}

export default QuoteButtons;