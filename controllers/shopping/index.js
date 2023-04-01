const { removeIngredientController } = require("./removeIngredientController");
const {
  addOrRemoveIngredientController,
} = require("./addOrRemoveIngredientController");
const { getShoppingListController } = require("./getShoppingListController");

module.exports = {
  addOrRemoveIngredientController,
  getShoppingListController,
  removeIngredientController,
};
