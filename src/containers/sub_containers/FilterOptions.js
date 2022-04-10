import React from "react";
import AuthorFilter from "../../components/FilterOptions/AuthorFilter";
import MoodFilter from "../../components/FilterOptions/MoodFilter";
import RandomQuote from "../../components/FilterOptions/RandomQuote";

const FilterOptions = ({random, author}) => {

    return (
        <>
            <AuthorFilter author={author}/>
            <MoodFilter />
            <RandomQuote random = {random}/>
        </>
    )
}

export default FilterOptions;