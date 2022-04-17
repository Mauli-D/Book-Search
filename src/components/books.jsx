import React, { useState } from "react";
import TableComponent from "./tableComponent";
import { handleSearch } from "../utils/searchbook";

const Book = () => {
    const [text, setText] = useState('');
    const [matches, setMatches] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return <>
        <div>
            <label htmlFor="book-search" className="margin-left-20">Search your Book</label>
            <input
                type="text"
                id="book-search"
                className={`input margin-20 ${isLoading ? "loading" : ""}`}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="btn" onClick={(e) => handleSearch({ text, setIsLoading, setMatches })}>Search</button>
        </div>
        <div className="margin-20">
            {matches.length > 0 &&
                <TableComponent
                    matches={matches}
                    setMatches={setMatches}
                />}
        </div>
    </>
}

export default Book