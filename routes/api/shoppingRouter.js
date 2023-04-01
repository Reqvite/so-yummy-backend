const express = require("express");
const {
  addOrRemoveIngredientController,
  getShoppingListController,
  removeIngredientController,
} = require("../../controllers/shopping");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, asyncWrapper(getShoppingListController));
router.patch(
  "/recipe-ingredinet",
  authMiddleware,
  asyncWrapper(addOrRemoveIngredientController)
);
router.delete(
  "/:ingredientId",
  authMiddleware,
  asyncWrapper(removeIngredientController)
);

module.exports = {
  shoppingRouter: router,
};
