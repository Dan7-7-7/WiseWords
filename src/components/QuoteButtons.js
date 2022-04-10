import React from "react";

const QuoteButtons = ({next, previous, quotes, quote}) => {

    const needNextButton = quotes.length > 1;
    const needPreviousButton = quotes.indexOf(quote) !== 0;

    let previousButton, nextButton;

    if(needPreviousButton){
        previousButton = <button onClick={previous}>Previous</button>
    }

    if(needNextButton){
        nextButton = <button onClick={next}>Next</button>
    }

    return (
        <>
            {previousButton}
            {nextButton}
        </>
    )
}

export default QuoteButtons;