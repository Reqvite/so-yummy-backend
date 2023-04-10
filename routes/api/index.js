const { authRouter } = require("./authRouter");
const { ownRecipesRouter } = require("./ownRecipesRouter");
const { recipesRouter } = require("./recipesRouter");
const { ingredientsRouter } = require("./ingredientsRouter");
const { shoppingRouter } = require("./shoppingRouter");
const { favoriteRouter } = require("./favoriteRouter");
const { popularRecipesRouter } = require("./popularRecipesRouter");
const { subscribeRouter } = require("./subscribeRouter");
const { userInformationRouter } = require("./userInformationRouter");

module.exports = {
  authRouter,
  ownRecipesRouter,
  recipesRouter,
  ingredientsRouter,
  shoppingRouter,
  favoriteRouter,
  popularRecipesRouter,
  subscribeRouter,
  userInformationRouter,
};
