const express = require("express");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const {
  subscribeController,
} = require("../../controllers/users/subscribeController");

const router = express.Router();

router.post("/", authMiddleware, asyncWrapper(subscribeController));

module.exports = {
  subscribeRouter: router,
};
