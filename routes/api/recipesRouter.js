const express = require("express");
const router = express.Router();
const { asyncWrapper } = require("../../helpers/apiHelpers");
const ctrl = require("../../controllers/recipes/mainPage");
const { getCategoryController } = require("../../controllers/recipes");

router.get("/category-list", asyncWrapper(getCategoryController));
router.get("/main-page", ctrl.getRecipes);

module.exports = {
  recipesRouter: router,
};
