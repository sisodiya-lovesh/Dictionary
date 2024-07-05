import React, { useState } from 'react';
import initialDictionary from './dictionarydata.json'; // Import JSON data

const XDictionary = () => {
    // State hooks
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState('');

    // Function to handle search
    const handleSearch = () => {
        const lowercaseSearchTerm = searchTerm.toLowerCase();
        const foundWord = initialDictionary.find(entry => entry.word.toLowerCase() === lowercaseSearchTerm);

        if (foundWord) {
            setSearchResult(foundWord.meaning);
        } else {
            setSearchResult("Word not found in the dictionary.");
        }
    };

    return (
        <div className="x-dictionary">
            <h1>Dictionary App</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Enter a word..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="result-container">
                <h3>Definition:</h3>{searchResult && (
                    <p>{searchResult}</p>
                )}
            </div>
        </div>
    );
};

export default XDictionary;
