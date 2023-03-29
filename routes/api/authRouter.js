const express = require("express");
const { currentUserContoller } = require("../../controllers/Auth/currentUser");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const router = express.Router();

module.exports = {
  authRouter: router,
};
