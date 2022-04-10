import React, {useEffect, useState} from "react";
import QuoteButtons from "./QuoteButtons";

const QuoteDisplay = ({quotes}) => {

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

    return (
        <>
            <h2>{quote.content}</h2>
            <h4>{quote.author}</h4>
            <QuoteButtons next={nextQuote} previous={previousQuote} quotes={quotes} quote={quote}/>
        </>
    )
}

export default QuoteDisplay;