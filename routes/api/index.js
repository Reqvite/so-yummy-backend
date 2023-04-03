const { recipesRouter } = require("./recipesRouter");
const { ingredientsRouter } = require("./ingredientsRouter");
const { shoppingRouter } = require("./shoppingRouter");
const { favoriteRouter } = require("./favoriteRouter");
const { popularRecipeRouter } = require("./popularRecipeRouter");

module.exports = {
  favoriteRouter,
  recipesRouter,
  ingredientsRouter,
  shoppingRouter,
  popularRecipeRouter,
};
