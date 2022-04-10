import React from "react";

const AuthorFilter = ({author}) => {

    const handleChange = (event) => {
        author(event.target.value);
    }

    return (
        <>
            <label htmlFor="author-search">Search for an author: </label>
            <input id="author-search" type="text" onChange={handleChange}/>
        </>
    )
}

export default AuthorFilter;