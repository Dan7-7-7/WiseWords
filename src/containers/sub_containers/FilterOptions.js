import React from "react";
import AuthorFilter from "../../components/FilterOptions/AuthorFilter";
import MoodFilter from "../../components/FilterOptions/MoodFilter";
import RandomQuote from "../../components/FilterOptions/RandomQuote";

const FilterOptions = () => {

    return (
        <>
            <AuthorFilter />
            <MoodFilter />
            <RandomQuote />
        </>
    )
}

export default FilterOptions;