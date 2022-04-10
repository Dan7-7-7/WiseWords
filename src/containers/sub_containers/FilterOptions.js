import React from "react";
import AuthorFilter from "../../components/FilterOptions/AuthorFilter";
import MoodFilter from "../../components/FilterOptions/MoodFilter";
import RandomQuote from "../../components/FilterOptions/RandomQuote";

const FilterOptions = ({random}) => {

    return (
        <>
            <AuthorFilter />
            <MoodFilter />
            <RandomQuote random = {random}/>
        </>
    )
}

export default FilterOptions;