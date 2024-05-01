import React, { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    if (input.trim() !== '') {
      onSearch(input);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter a food item"
        value={input}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
