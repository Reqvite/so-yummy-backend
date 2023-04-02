const express = require("express");
const {
  getRecipes,
  getCategoryController,
  getCategoryPageController,
  getRecipeByIdController,
} = require("../../controllers/recipes");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const { authMiddleware } = require("../../middlewares/authMiddleware");

const router = express.Router();

router.use(authMiddleware);

router.get("/main-page", asyncWrapper(getRecipes));
router.get("/category-list", asyncWrapper(getCategoryController));
router.get("/:category", asyncWrapper(getCategoryPageController));
router.get("/recipe/:id", asyncWrapper(getRecipeByIdController));

module.exports = {
  recipesRouter: router,
};
