import React, {useState, useEffect} from "react";

const QuotesBox = () => {

    const [quotes, setQuotes] = useState([]);

    const [favourites, setFavourites] = useState([]);

    const [tags, setTags] = useState([]);

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getTags();
    }, []);

    const getRandomQuote = () => {
        fetch('https://api.quotable.io/random')
        .then(result => result.json())
        .then(result => setQuotes([result]));
    }

    const getAuthorQuotes = (author) => {
        fetch(`https://quotable.io/quotes?author=${author}`)
        .then(result => result.json())
        .then(result => setQuotes(result.results));
    }
    
    const searchAuthorQuotes = (author) => {
        fetch(`https://api.quotable.io/search/quotes?query=${author}&fields=author`)
        .then(result => result.json())
        .then(result => setQuotes(result.results));
    }

    const getTagQuotes = (tag) => {
        fetch(`https://quotable.io/quotes?tags=${tag}`)
        .then(result => result.json())
        .then(result => setQuotes(result.results));
    }

    const getTags = () => {fetch('https://quotable.io/tags')
    .then(result => result.json())
    .then(result => result.map(tag => tag.name))
    .then(result => setTags(result));}

    return (
        <h1>this is the container for the quotes and the select inputs</h1>
    )
}

export default QuotesBox;

// heading COMPONENT
// favoutires box (either displayed or with a button to display)
// three options in a flex row: CONTAINER
            // choose a quotifier (author) => list of quotes, click through one by one with a "next" button COMPONENT
                // https://api.quotable.io/search/quotes?query=kennedy&fields=author
            // what's on your mind today? (list of keyword topics) => as above COMPONENT
                // https://api.quotable.io/random?tags=history%7Ccivil-rights (NB this is a single random quote each time)
            // just gimme a random quote! => single quote COMPONENT
                // https://api.quotable.io/random
// the quote box - displaying one quote at a time. COMPONENT
// (in the first two select cases) a next button IN BOX COMPONENT
// favourite button
// optional footer (or header): quote of the day COMPONENT


// STATE
// the quotes (array or object)
// favourites (array)