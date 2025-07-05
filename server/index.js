import express from 'express';
import connectionToDB from './config/dbconnection.js';
import authRoutes from './Routes/authRoutes.js';
import userRoutes from './Routes/userRoutes.js';
import axios from 'axios';

const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Fetch and filter Pokémon from external API
app.get('/pokemon', async (req, res) => {
  const { page = 1, type, search } = req.query;
  const limit = 20;
  const offset = (page - 1) * limit;

  // Handle search by name
  if (search) {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
      const data = response.data;

      const result = {
        name: data.name,
        image: data.sprites.front_default,
        types: data.types.map(t => t.type.name),
        stats: data.stats.map(stat => ({
          name: stat.stat.name,
          value: stat.base_stat
        }))
      };

      return res.json({
        searchResult: true,
        pokemon: result
      });

    } catch (error) {
      return res.status(404).json({
        searchResult: false,
        message: "Pokémon not found"
      });
    }
  }

  // Fetch paginated list
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );

    const basicList = response.data.results;

    const detailedList = await Promise.all(
      basicList.map(async (pokemon) => {
        const details = await axios.get(pokemon.url);
        const types = details.data.types.map(t => t.type.name);

        return {
          name: details.data.name,
          image: details.data.sprites.front_default,
          types: types,
          stats: details.data.stats.map(stat => ({
            name: stat.stat.name,
            value: stat.base_stat
          }))
        };
      })
    );

    const filterType = type?.toLowerCase();
    const filteredList = filterType
      ? detailedList.filter(p => p.types.includes(filterType))
      : detailedList;

    res.json({
      currentPage: Number(page),
      nextPage: Number(page) + 1,
      previousPage: page > 1 ? Number(page) - 1 : null,
      totalShown: filteredList.length,
      results: filteredList
    });

  } catch (error) {
    console.error('Error fetching Pokémon:', error.message);
    res.status(500).json({ error: 'Failed to fetch Pokémon data' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectionToDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});