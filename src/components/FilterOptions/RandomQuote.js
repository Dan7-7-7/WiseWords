import React from "react";

const RandomQuote = ({getRandomQuote, resetCurrentAuthor, resetCurrentTag}) => {

    const handleClick = () => {
        resetCurrentAuthor();
        resetCurrentTag();
        getRandomQuote();
    }

    return (
        <button className="random" onClick={handleClick}>Just gimme a Quote!</button>
    )
}

export default RandomQuote;