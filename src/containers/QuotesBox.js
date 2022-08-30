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

    const getRandomQuote = () => {
        fetch('https://api.quotable.io/random')
        .then(result => result.json())
        .then(result => setQuotes([result]));
    }

    const getAuthorQuotes = (queryAuthor) => {
        if(queryAuthor !== ''){
            fetch(`https://api.quotable.io/search/quotes?query=${queryAuthor}&fields=author`)
            .then(result => result.json())
            .then(result => setQuotes(result.results.length === 0 ? [{content: 'No quotes found', author: ''}] : result.results));
        }
    }

    
    
    // const searchQuotes = (query) => {
    //     fetch(`https://api.quotable.io/search/quotes?query=${query}`)
    //     .then(result => result.json())
    //     .then(result => setQuotes(result.results));
    // }

    const getTagQuotes = (tag) => {
        fetch(`https://quotable.io/quotes?tags=${tag}`)
        .then(result => result.json())
        .then(result => setQuotes(result.results.length === 0 ? [{content: 'No quotes found', author: ''}] : result.results));
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
            <FilterOptions getRandomQuote={getRandomQuote} getAuthorQuotes={getAuthorQuotes} tags={tags} getTagQuotes={getTagQuotes}/>
            <QuoteDisplay quotes={quotes} favourite={addFavourite}/>
            <Favourites favourites={favourites}/>
        </>
    )
}

export default QuotesBox;

// TODO:
// set up cypress testing
// either clear input boxes when the other is selected or random button is pressed, or make it a dual search (author and tag)
// splice together the zen quotes api and this one
// build in flutter!