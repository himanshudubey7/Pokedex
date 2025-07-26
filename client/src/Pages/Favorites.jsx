import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const response = await axios.get('http://localhost:5000/api/user/favorites', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFavorites(response.data);
      } catch (error) {
        console.error('Failed to fetch favorites:', error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="favorites-container">
      <h2>Your Favorite Pokémon</h2>
      <div className="favorites-list">
        {favorites.length === 0 ? (
          <p>No favorites saved.</p>
        ) : (
          favorites.map((poke, index) => (
            <div key={index} className="favorite-card">
              <img src={poke.image} alt={poke.name} />
              <h3>{poke.name}</h3>
              <p>Type: {poke.types.join(', ')}</p>
              <p>Stats: {Object.entries(poke.stats).map(([k, v]) => `${k}: ${v}`).join(', ')}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
