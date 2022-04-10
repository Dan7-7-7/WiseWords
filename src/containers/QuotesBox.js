import React, {useState, useEffect} from "react";
import Heading from "../components/Heading";
import Favourites from "../components/Favourites";
import QuoteDisplay from "../components/QuoteDisplay";
import FilterOptions from "./sub_containers/FilterOptions";
import './QuotesBox.css';

const QuotesBox = () => {

    const [quotes, setQuotes] = useState([
        {
            content: '',
            author: ''
        }
    ]);

    const [favourites, setFavourites] = useState([]);

    const [tags, setTags] = useState([]);

    // const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getTags();
    }, []);

    // const resetQuote = () => {
    //     if(quotes === []){
    //         setQuotes([
    //             {
    //                 content: 'No quotes found',
    //                 author: ''
    //             }
    //         ])
    //     }
    // }

    const getRandomQuote = () => {
        fetch('https://api.quotable.io/random')
        .then(result => result.json())
        .then(result => setQuotes([result]));
    }

    const getAuthorQuotes = (queryAuthor) => {
        if(queryAuthor !== ''){
            fetch(`https://api.quotable.io/search/quotes?query=${queryAuthor}&fields=author`)
            .then(result => result.json())
            .then(result => setQuotes(result.results.length === 0 ? [{content: '', author: ''}] : result.results));
        }
    }

    // .map(result => {result.author : result.content}))
    
    // const searchQuotes = (query) => {
    //     fetch(`https://api.quotable.io/search/quotes?query=${query}`)
    //     .then(result => result.json())
    //     .then(result => setQuotes(result.results));
    // }

    const getTagQuotes = (tag) => {
        fetch(`https://quotable.io/quotes?tags=${tag}`)
        .then(result => result.json())
        .then(result => setQuotes(result.results));
    }

    const getTags = () => {
        fetch('https://quotable.io/tags')
        .then(result => result.json())
        .then(result => result.map(tag => tag.name))
        .then(result => setTags(result));
    }

    // const getAuthors = () => {
    //     fetch('https://quotable.io/authors?sortBy=name&order=asc')
    //     .then(result => result.json())
    //     .then(result => setAuthors(result.results.map(author => author.name)));
    // }

    const addFavourite = (quote) => {
        if(favourites.includes(quote) === false){
            setFavourites([...favourites, quote]);
        }
    }

    return (
        <>
            <Heading />
            <FilterOptions random={getRandomQuote} author={getAuthorQuotes} tags={tags} getTagQuotes={getTagQuotes}/>
            <QuoteDisplay quotes={quotes} favourite={addFavourite}/>
            <Favourites favourites={favourites}/>
        </>
    )
}

export default QuotesBox;

// heading COMPONENT
// favoutires box (either displayed or with a button to display)
// three options in a flex row: CONTAINER
            // choose a quotifier (author, search bar) => list of quotes, click through one by one with a "next" button COMPONENT
                // getAuthorQuotes (array)
            // what's on your mind today? (list of keyword topics, select menu) => as above COMPONENT
                // getTagQuotes (array)
// try your own search (search bar) COMPONENT DELETED
    // searchQuotes (array) DELETED
            // just gimme a random quote! => single quote COMPONENT
                // getRandomQuote (array with one item)
// the quote box - displaying one quote at a time. COMPONENT
// (in the first two select cases) a next button IN BOX COMPONENT
// favourite button
// optional footer (or header): quote of the day COMPONENT


// STATE
// the quotes (array or object)
// favourites (array)