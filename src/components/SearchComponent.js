import React, { useState, useEffect } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (input.length > 2) {
      setSuggestions(
        ['Apple', 'Banana', 'Orange'].filter((fruit) =>
          fruit.toLowerCase().includes(input.toLowerCase())
        )
      );
    } else {
      setSuggestions([]);
    }
  }, [input]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    if (input.trim() !== '') {
      onSearch(input);
      setInput('');
    }
  };

  return (
    <div className="input-group input-group-sm">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a food item"
        value={input}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((suggestion, index) => (
            <div key={index} onClick={() => setInput(suggestion)}>
              {suggestion}
            </div>
          ))}
        </div>
      )}
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
