const express = require("express");
const {
  getShoppingListController,
  removeIngredientController,
  addIngredientController,
} = require("../../controllers/shopping");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, asyncWrapper(getShoppingListController));
router.patch("/add", authMiddleware, asyncWrapper(addIngredientController));
router.delete(
  "/:ingredientId/:recipeId",
  authMiddleware,
  asyncWrapper(removeIngredientController)
);

module.exports = {
  shoppingRouter: router,
};
