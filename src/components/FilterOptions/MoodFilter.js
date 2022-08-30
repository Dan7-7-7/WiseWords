import React from "react";

const MoodFilter = ({tags, getTagQuotes, currentTag, setCurrentTag, resetCurrentAuthor}) => {

    const tagOptions = tags.map((tag, index) => <option key={index} value={tag}>{tag}</option>)

    const handleChange = (event) => {
        setCurrentTag(event.target.value);
        resetCurrentAuthor();
        getTagQuotes(event.target.value);
    }

    return (
        <>
            <label htmlFor="moods">What's on your mind today? </label>
            <select name="moods" id="moods" onChange={handleChange} value={currentTag}>
                <option value="" disabled>Tell us...</option>
                {tagOptions}
            </select>
        </>
    )
}

export default MoodFilter;