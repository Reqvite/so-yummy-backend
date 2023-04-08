const { getFavoritesController } = require("./getFavorites");
const { addFavoriteController } = require("./addFavorite");
const { deleteFavoriteController } = require("./deleteFavorite");
const {
  getFavoritePaginationController,
} = require("./getFavoritePaginationController");

module.exports = {
  getFavoritesController,
  addFavoriteController,
  deleteFavoriteController,
  getFavoritePaginationController,
};
