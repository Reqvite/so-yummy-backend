const express = require("express");
const {
  getFavoritesController,
  addFavoriteController,
  deleteFavoriteController,
} = require("../../controllers/favorite");
const { authMiddleware } = require("../../middlewares/authMiddleware");

const router = express.Router();

router.get("/favorite", authMiddleware, getFavoritesController);
router.patch("/favorite/:id", authMiddleware, addFavoriteController);
router.patch("/favorite/:id", authMiddleware, deleteFavoriteController);

module.exports = router;