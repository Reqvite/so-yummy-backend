const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/recipes/getRecipes");
const { authMiddleware } = require("../../middlewares/authMiddleware");

router.get("/main-page", authMiddleware, ctrl.getRecipes);

module.exports = {
  recipesRouter: router,
};
