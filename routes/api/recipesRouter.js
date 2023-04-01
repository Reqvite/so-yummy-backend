const express = require("express");
const {
  getRecipes,
  getCategoryController,
  getCategoryPageController,
} = require("../../controllers/recipes");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const router = express.Router();
const { authMiddleware } = require("../../middlewares/authMiddleware");

router.get("/main-page", authMiddleware, asyncWrapper(getRecipes));
router.get("/category-list", asyncWrapper(getCategoryController));
router.get("/:category", asyncWrapper(getCategoryPageController));

module.exports = {
  recipesRouter: router,
};
