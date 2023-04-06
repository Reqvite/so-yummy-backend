const express = require("express");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  subscribeController,
} = require("../../controllers/users/subscribeController");

const router = express.Router();

router.post("/", asyncWrapper(subscribeController));

module.exports = {
  subscribeRouter: router,
};
