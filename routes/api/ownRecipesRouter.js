const express = require("express");
const {
  getOwnRecipesController,
  addRecipeController,
  removeRecipeController,
} = require("../../controllers/ownRecipes");

const { asyncWrapper } = require("../../helpers/apiHelpers");
const { uploadCloud } = require("../../middlewares");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, asyncWrapper(getOwnRecipesController));
router.post(
  "/upload",
  authMiddleware,
  uploadCloud.single("image"),
  asyncWrapper(addRecipeController)
);

router.delete(
  "/:recipeId",
  authMiddleware,
  asyncWrapper(removeRecipeController)
);

module.exports = {
  ownRecipes: router,
};
