const express = require("express");
const {
  registrationController,
  loginController,
  logoutController,
  currentUserController,
} = require("../../controllers/users");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const {
  registerValidation,
  loginValidation,
} = require("../../middlewares/validationMiddleware");

const router = express.Router();

router.post(
  "/signup",
  registerValidation,
  asyncWrapper(registrationController)
);
router.post("/login", loginValidation, asyncWrapper(loginController));
router.post("/logout", authMiddleware, asyncWrapper(logoutController));
router.get("/current", authMiddleware, asyncWrapper(currentUserController));

module.exports = {
  authRouter: router,
};
