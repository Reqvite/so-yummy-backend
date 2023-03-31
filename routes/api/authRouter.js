const express = require("express");
const {
  registrationController,
  loginController,
  logoutController,
  currentUserController,
  updateUserController,
} = require("../../controllers/users");
const { asyncWrapper } = require("../../helpers/apiHelpers");
const { authMiddleware } = require("../../middlewares/authMiddleware");

const uploadCloud = require("../../middlewares/uploadMiddleware");

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
router.patch(
  "/update",
  authMiddleware,
  uploadCloud.single("avatar"),
  asyncWrapper(updateUserController)
);

module.exports = {
  authRouter: router,
};
