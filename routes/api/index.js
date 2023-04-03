const { recipesRouter } = require("./recipesRouter");
const { ingredientsRouter } = require("./ingredientsRouter");
const { shoppingRouter } = require("./shoppingRouter");
const { favoriteRouter } = require("./favoriteRouter");
const { popularRecipesRouter } = require("./popularRecipesRouter");

module.exports = {
  favoriteRouter,
  recipesRouter,
  ingredientsRouter,
  shoppingRouter,
  popularRecipesRouter,
};
