const express = require("express");
const router = express.Router();
const { asyncWrapper } = require("../../helpers/apiHelpers");
const ctrl = require("../../controllers/recipes/mainPage");
const {
  getCategoryController,
} = require("../../controllers/recipes");

router.get("/main-page", ctrl.listRecipes);
router.get("/category-list", asyncWrapper(getCategoryController));

module.exports = {
  recipesRouter: router,
};
