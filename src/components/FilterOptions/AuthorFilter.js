import React from "react";

const AuthorFilter = ({getAuthorQuotes, currentAuthor, setCurrentAuthor, resetCurrentTag}) => {

    const handleChange = (event) => {
        setCurrentAuthor(event.target.value)
        resetCurrentTag();
        getAuthorQuotes(event.target.value);
    }

    return (
        <>
            <label htmlFor="author-search">Search for an author: </label>
            <input id="author-search" type="text" value={currentAuthor} onChange={handleChange}/>
        </>
    )
}

export default AuthorFilter;