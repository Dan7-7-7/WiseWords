import React, { useState } from "react";
import AuthorFilter from "../../components/FilterOptions/AuthorFilter";
import MoodFilter from "../../components/FilterOptions/MoodFilter";
import RandomQuote from "../../components/FilterOptions/RandomQuote";
import './FilterOptions.css'

const FilterOptions = ({getRandomQuote, getAuthorQuotes, tags, getTagQuotes}) => {

    const [currentAuthor, setCurrentAuthor] = useState("");
    const [currentTag, setCurrentTag] = useState("");

    const resetCurrentAuthor = () => {
        setCurrentAuthor("");
    }

    const resetCurrentTag = () => {
        setCurrentTag("");
    }

    return (
        <>
            <div className="filter-container">
                <div className="item">
                    <AuthorFilter getAuthorQuotes={getAuthorQuotes} currentAuthor={currentAuthor} setCurrentAuthor={setCurrentAuthor} resetCurrentTag={resetCurrentTag} />
                </div>
                <div className="item">
                    <p><b>OR</b></p>
                </div>
                <div className="item">
                    <MoodFilter tags={tags} getTagQuotes={getTagQuotes} currentTag={currentTag} setCurrentTag={setCurrentTag} resetCurrentAuthor={resetCurrentAuthor} />
                </div>
            </div>
            <RandomQuote getRandomQuote={getRandomQuote} resetCurrentAuthor={resetCurrentAuthor} resetCurrentTag={resetCurrentTag} />
        </>
    )
}

export default FilterOptions;