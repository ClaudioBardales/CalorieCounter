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
    <div className="input-group input-group-sm">
      <input
        type="text"
        className="form-control"
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
