const express = require("express");
const { getPopularRecipesController } = require("../../controllers/recipes");

const router = express.Router();

router.get("/", getPopularRecipesController);

module.exports = {
  popularRecipesRouter: router,
};
