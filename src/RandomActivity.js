// src/RandomActivity.js
import React, { useState } from 'react';

// Component to fetch a random joke and add it to the bucket list
function RandomActivity({ addItem }) {
  const [jokeData, setJokeData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch a random joke from the icanhazdadjoke API
  const fetchJoke = () => {
    setLoading(true);
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJokeData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching joke:', error);
        alert('Failed to fetch joke. Please try again later.');
        setLoading(false);
      });
  };

  // Add the fetched joke to the bucket list
  const handleAddJoke = () => {
    if (jokeData && jokeData.joke) {
      addItem(jokeData.joke);
      setJokeData(null);
    }
  };

  return (
    <div className="random-activity">
      <h2>Get a Random Joke</h2>
      <button onClick={fetchJoke}>Fetch Joke</button>
      {loading && <p>Loading...</p>}
      {jokeData && (
        <div className="joke-details">
          <p><strong>Joke:</strong> {jokeData.joke}</p>
          <button onClick={handleAddJoke}>Add to Joke List</button>
        </div>
      )}
    </div>
  );
}

export default RandomActivity;
