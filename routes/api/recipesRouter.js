const express = require("express");
const router = express.Router();
const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  listRecipes,
  getCategoryController,
} = require("../../controllers/recipes");

router.get("/main-page", listRecipes);
router.get("/category-list", asyncWrapper(getCategoryController));

module.exports = {
  recipesRouter: router,
};
