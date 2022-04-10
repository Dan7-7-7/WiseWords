import React from "react";
import AuthorFilter from "../../components/FilterOptions/AuthorFilter";
import MoodFilter from "../../components/FilterOptions/MoodFilter";
import RandomQuote from "../../components/FilterOptions/RandomQuote";

const FilterOptions = ({random, author, tags, getTagQuotes}) => {

    return (
        <>
            <AuthorFilter author={author}/>
            <MoodFilter tags={tags} getTagQuotes={getTagQuotes}/>
            <RandomQuote random = {random}/>
        </>
    )
}

export default FilterOptions;