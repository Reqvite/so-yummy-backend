const express = require("express");
const {
  getFavoritesController,
  addFavoriteController,
  deleteFavoriteController,
} = require("../../controllers/favorite");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const router = express.Router();

router.get('/', authMiddleware, asyncWrapper (getFavoritesController));

router.post('/', authMiddleware, asyncWrapper (addFavoriteController));

router.delete('/:idFood', authMiddleware, asyncWrapper (deleteFavoriteController));

module.exports= {
  favoriteRouter: router,
};