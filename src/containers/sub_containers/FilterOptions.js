import React from "react";
import AuthorFilter from "../../components/FilterOptions/AuthorFilter";
import MoodFilter from "../../components/FilterOptions/MoodFilter";
import RandomQuote from "../../components/FilterOptions/RandomQuote";
import './FilterOptions.css'

const FilterOptions = ({random, author, tags, getTagQuotes}) => {

    return (
        <>
            <div className="filter-container">
                <div className="item">
                    <AuthorFilter author={author}/>
                </div>
                <div className="item">
                    <p><b>OR</b></p>
                </div>
                <div className="item">
                    <MoodFilter tags={tags} getTagQuotes={getTagQuotes}/>
                </div>
            </div>
            <RandomQuote random = {random}/>
        </>
    )
}

export default FilterOptions;