const express = require("express");
const {
  addOrRemoveIngredientController,
  getShoppingListController,
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

module.exports = {
  shoppingRouter: router,
};
