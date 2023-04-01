const express = require("express");
const {
  getRecipes,
  getCategoryController,
  getCategoryPageController,
  getRecipeByIdController,
} = require("../../controllers/recipes");
const { asyncWrapper } = require("../../helpers/apiHelpers");

const router = express.Router();

router.get("/main-page", asyncWrapper(getRecipes));
router.get("/category-list", asyncWrapper(getCategoryController));
router.get("/:category", asyncWrapper(getCategoryPageController));
router.get("/recipe/:id", asyncWrapper(getRecipeByIdController));


module.exports = {
  recipesRouter: router,
};
