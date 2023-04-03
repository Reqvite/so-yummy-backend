const { recipesRouter } = require("./recipesRouter");
const { ingredientsRouter } = require("./ingredientsRouter");
const { shoppingRouter } = require("./shoppingRouter");
const { favoritesRouter } = require("./favoritesRouter");
const { popularRecipesRouter } = require("./popularRecipesRouter");

module.exports = {
  recipesRouter,
  ingredientsRouter,
  shoppingRouter,
  favoritesRouter,
  popularRecipesRouter,
};
