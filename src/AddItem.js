// src/AddItem.js
import React, { useState } from 'react';

// Function to add a new joke to the list
function AddItem({ addItem }) {
  const [inputValue, setInputValue] = useState('');

  // Handle the submission of a new item ensuring it is not empty
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addItem(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new joke to your list..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add Joke</button>
    </form>
  );
}

export default AddItem;
