const express = require("express");
const {
  getIngredientsController,
} = require("../../controllers/ingredients");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const { authMiddleware } = require("../../middlewares/authMiddleware");

const router = express.Router();

router.use(authMiddleware);

router.get("/", asyncWrapper(getIngredientsController));


module.exports = {
  ingredientsRouter: router,
};
