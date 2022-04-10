import React from "react";

const QuoteDisplay = ({quotes}) => {

    // const [quote, setQuote] = useState(quotes[0])

    const quote = quotes[0];

    // const nextQuote = () => {
    //     const index = quotes.indexOf(quote);
    //     index < quotes.length ? setQuote(quotes[index+1]) : setQuote(quotes[0]);
    // }

    return (
        <>
            <h2>{quote.content}</h2>
            <h4>{quote.author}</h4>
            {/* <button onClick={nextQuote}>Next</button> */}
        </>
    )
}

export default QuoteDisplay;