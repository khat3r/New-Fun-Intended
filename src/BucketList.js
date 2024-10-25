// src/BucketList.js
import React from 'react';

// Component for displaying the list of jokes
function BucketList({ items, removeItem }) {
  return (
    <div className="bucketlist">
      <h2>Your Joke List</h2>
      {items.length === 0 ? (
        <p>Your joke list is empty! Add some cringy jokes for your family gathering.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => removeItem(index)}>✖</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BucketList;
