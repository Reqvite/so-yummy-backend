const express = require("express");
const {
  getRecipes,
  getCategoryController,
  getCategoryPageController,
} = require("../../controllers/recipes");
const { asyncWrapper } = require("../../helpers/apiHelpers");

const router = express.Router();

router.get("/main-page", asyncWrapper(getRecipes));

router.get("/category-list", asyncWrapper(getCategoryController));
router.get("/:category", asyncWrapper(getCategoryPageController));
module.exports = {
  recipesRouter: router,
};
