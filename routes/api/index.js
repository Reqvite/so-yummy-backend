const { recipesRouter } = require("./recipesRouter");
const { ingredientsRouter } = require("./ingredientsRouter");
const { shoppingRouter } = require("./shoppingRouter");
const { favoriteRouter } = require("./favoriteRouter");
const { popularRecipesRouter } = require("./popularRecipeRouter");

module.exports = {
  recipesRouter,
  ingredientsRouter,
  shoppingRouter,
  favoriteRouter,
  popularRecipesRouter,
};
