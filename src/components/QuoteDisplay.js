import React, {useEffect, useState} from "react";
import QuoteButtons from "./QuoteButtons";
import './QuoteDisplay.css';

const QuoteDisplay = ({quotes, favourite}) => {

    const [quote, setQuote] = useState(quotes[0]);

    // to accommodate asynchronicity - quote wasn't updating in synch with quotes
    useEffect(() => {
        setQuote(quotes[0])
        console.log('quote updated')
    }, [quotes]);

    const nextQuote = () => {
        const index = quotes.indexOf(quote);
        index < quotes.length - 1 ? setQuote(quotes[index+1]) : setQuote(quotes[0]);
    }

    const previousQuote = () => {
        const index = quotes.indexOf(quote);
        index > 0 ? setQuote(quotes[index-1]) : setQuote(quotes[0]);
    }

    const handleClick = () => {
        favourite(quote);
    }

    return (
        <div className="quote-display">
            <h2>{quote.content}</h2>
            <h3>{quote.author}</h3>
            <QuoteButtons next={nextQuote} previous={previousQuote} quotes={quotes} quote={quote} handleClick={handleClick}/>
        </div>
    )
}

export default QuoteDisplay;