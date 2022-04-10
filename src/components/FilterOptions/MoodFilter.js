import React from "react";

const MoodFilter = ({tags, getTagQuotes}) => {

    const tagOptions = tags.map((tag, index) => <option key={index} value={tag}>{tag}</option>)

    const handleChange = (event) => {
        getTagQuotes(event.target.value);
    }

    return (
        <>
            <label htmlFor="moods">What's on your mind today?</label>
            <select name="moods" id="moods" onChange={handleChange}>
                {tagOptions}
            </select>
        </>
    )
}

export default MoodFilter;