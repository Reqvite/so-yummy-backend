const express = require("express");
const {
  getOwnRecipesController,
  addRecipeController,
  removeRecipeController,
} = require("../../controllers/ownRecipes");

const { asyncWrapper } = require("../../helpers/apiHelpers");
const router = express.Router();
const { authMiddleware } = require("../../middlewares/authMiddleware");
const uploadCloud = require("../../middlewares/uploadMiddleware");

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
