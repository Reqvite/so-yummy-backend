const { Recipe } = require("../../models/recipesModel");

const getFavoritePaginationController = async (req, res) => {
  const user = req.user;
  const page = parseInt(req.query.page) || 1;

  const limit = 4;

  const startIndex = (page - 1) * limit;

  const favoriteRecipes = await Recipe.find({
    _id: { $in: user.favorites },
  })
    .skip(startIndex)
    .limit(limit);

  res.status(200).json({
    currentPage: page,
    totalPages: Math.ceil(user.favorites.length / limit),
    favorites: favoriteRecipes,
  });
};

module.exports = {
  getFavoritePaginationController,
};
