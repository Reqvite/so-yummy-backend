const express = require("express");
const {
  getFavoritesController,
  addFavoriteController,
  deleteFavoriteController,
  getFavoritePaginationController,
} = require("../../controllers/favorite");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { asyncWrapper } = require("../../helpers/apiHelpers");

const router = express.Router();

router.get("/", authMiddleware, asyncWrapper(getFavoritesController));
router.get(
  "/paginate",
  authMiddleware,
  asyncWrapper(getFavoritePaginationController)
);
router.post("/:id", authMiddleware, asyncWrapper(addFavoriteController));
router.delete("/:id", authMiddleware, asyncWrapper(deleteFavoriteController));

module.exports = {
  favoriteRouter: router,
};
