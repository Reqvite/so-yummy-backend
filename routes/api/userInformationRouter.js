const express = require("express");
const router = express.Router();

const { userInformationController } = require("../../controllers/users");

const { authMiddleware } = require("../../middlewares/authMiddleware");
const { asyncWrapper } = require("../../helpers/apiHelpers");

router.get("/:id", authMiddleware, asyncWrapper(userInformationController));

module.exports = {
  userInformationRouter: router,
};
