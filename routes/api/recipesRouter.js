const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/recipes/mainPage");

router.get("/main-page", ctrl.listRecipes);

module.exports = {
  recipesRouter: router,
};
