const express = require("express");
const {
  getFavoritesController,
  addFavoriteController,
  deleteFavoriteController,
} = require("../../controllers/favorite");
const { authMiddleware } = require("../../middlewares/authMiddleware");

const router = express.Router();

router.get("/favorite-page", authMiddleware, getFavoritesController);
router.patch("/favorite/:id", authMiddleware, addFavoriteController);
router.delete("/favorite/:id", authMiddleware, deleteFavoriteController);

module.exports = {
  favoritesRouter: router,
};