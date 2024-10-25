// src/App.js
import React, { useState } from 'react';
import './App.css';
import AddItem from './AddItem';
import BucketList from './BucketList';
import RandomActivity from './RandomActivity';

function App() {
  const [bucketItems, setBucketItems] = useState([]);

  // Function to add a new item to the bucket list
  const addItem = (item) => {
    setBucketItems([...bucketItems, item]);
  };

  // Function to remove an item from the bucket list
  const removeItem = (index) => {
    setBucketItems(bucketItems.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>No Fun Intended</h1>
      <AddItem addItem={addItem} />
      <RandomActivity addItem={addItem} />
      <BucketList items={bucketItems} removeItem={removeItem} />
    </div>
  );
}

export default App;
