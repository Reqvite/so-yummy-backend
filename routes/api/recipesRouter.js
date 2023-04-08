const express = require("express");
const {
  getCategoryController,
  getCategoryPageController,
  getRecipeByIdController,
  getRecipesController,
  getRecipesByKeywordController,
  getRecipesByIngredientController,
} = require("../../controllers/recipes");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const { authMiddleware } = require("../../middlewares/authMiddleware");

const router = express.Router();

router.use(authMiddleware);

router.get("/search", asyncWrapper(getRecipesByKeywordController));
router.get("/main-page", asyncWrapper(getRecipesController));
router.get("/category-list", asyncWrapper(getCategoryController));
router.get("/:category", asyncWrapper(getCategoryPageController));
router.get("/recipe/:id", asyncWrapper(getRecipeByIdController));
router.get("/search/ingredient", asyncWrapper(getRecipesByIngredientController));

module.exports = {
  recipesRouter: router,
};
