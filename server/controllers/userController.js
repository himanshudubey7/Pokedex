export const addFavorite = async (req, res) => {
  const { name, image, types, stats } = req.body;

  try {
    req.user.favorites.push({ name, image, types, stats });
    await req.user.save();
    res.status(201).json({ message: 'Favorite added!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add favorite', error: err.message });
  }
};

export const getFavorites = async (req, res) => {
    try {
    const user = req.user; // From protect middleware
    res.status(200).json({ favorites: user.favorites });
  } catch (error) {
    console.error("Error fetching favorites:", error.message);
    res.status(500).json({ message: "Failed to load favorites" });
  }
};

// DELETE a favorite Pokémon by name
export const deleteFavorite = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Pokémon name required' });
  }

  try {
    const user = await user.findById(req.user._id);

    user.favorites = user.favorites.filter(poke => poke.name !== name);

    await user.save();

    res.json({
      success: true,
      message: `${name} removed from favorites`,
      favorites: user.favorites
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove favorite' });
  }
};

