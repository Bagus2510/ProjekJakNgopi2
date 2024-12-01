import Favorites from "../models/favoriteModel.js";
import Users from "../models/userModel.js";

export const addFavorite = async (req, res) => {
  const { place_name, city } = req.body;
  const { email } = req;

  try {
    const user = await Users.findOne({ where: { email } });
    if (!user) return res.status(404).json({ msg: "User not found" });

    const newFavorite = await Favorites.create({
      name: user.name,
      place_name,
      city,
    });

    res.status(201).json({ msg: "Favorite added", favorite: newFavorite });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const getFavorites = async (req, res) => {
  const { email } = req;

  try {
    const user = await Users.findOne({ where: { email } });
    if (!user) return res.status(404).json({ msg: "User not found" });

    const favorites = await Favorites.findAll({ where: { name: user.name } });
    res.status(200).json(favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};
