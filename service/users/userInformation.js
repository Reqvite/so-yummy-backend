const { default: mongoose } = require("mongoose");
const {
  WrongParametersError,
  ValidationError,
} = require("../../helpers/errors");
const { User } = require("../../models/userModel");
const { Recipe } = require("../../models/recipesModel");

async function getUserInformation(userId) {
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw new ValidationError(`Invalid user id=${userId}`);
  }

  const user = await User.findById(userId);

  if (!user) {
    throw new WrongParametersError(`User with id=${userId} is not found!`);
  }
  const recipesCount = await Recipe.countDocuments({ owner: userId }).exec();
  const userInformation = {
    avatar: user.avatarURL,
    name: user.name,
    // email: user.email,
    daysInApp: Math.floor(
      (new Date() - user.createdAt) / (1000 * 60 * 60 * 24)
    ),
    recipesCount: recipesCount,
    selectedRecipes: user.favorites.length,
  };

  return userInformation;
}

module.exports = {
  getUserInformation,
};
