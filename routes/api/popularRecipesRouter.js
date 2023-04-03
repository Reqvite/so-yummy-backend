const express = require("express");
const { getPopularRecipes } = require("../../controllers/recipes");

const router = express.Router();

router.get("/", getPopularRecipes);

module.exports = {
  popularRecipesRouter: router,
};
