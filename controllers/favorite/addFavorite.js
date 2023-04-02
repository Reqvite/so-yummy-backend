const { mongoose } = require('mongoose');
const { User } = require('../../models/userModel');
const { PopularRecipes } = require('../../models/popularRecipeModel');
const { Recipe } = require('../../models/recipesModel');
const { updateRecipeById } = require('../../service/favorite/updateRecipeById');


const addFavoriteController = async (req, res) => {
  const { idFood: idRecipe } = req.body;
  const { _id } = req.user;

  let isPopular = await PopularRecipes.findOneAndUpdate(
    { idFood: idRecipe },
    { $addToSet: { users: _id } }
  );

  if (idRecipe.toString().length < 1) {
    const { food } = await updateRecipeById(idRecipe);

    const { idFood, strFood, strInstructions, strFoodThumb } = food[0];

    if (!isPopular) {
      isPopular = await PopularRecipes.create({
        idFood,
        strFood,
        strInstructions,
        strFoodThumb,
        users: [_id],
      });
    }
  } else {
    const { title, description, imgURL } = await Recipe.findOne({
      _id: idRecipe,
      owner: _id,
    });
    if (!isPopular) {
      isPopular = await PopularRecipes.create({
        idFood: idRecipe,
        strFood: title,
        strInstructions: description,
        strFoodThumb: imgURL,
        users: [_id],
      });
    }
  }

  if (isPopular) {
    const newFavoriteRecipes = {
      foodId: mongoose.Types.ObjectId(isPopular._id),
      addedOn: new Date(),
    };

    await User.findOneAndUpdate(
      { _id },
      { $addToSet: { favoriteRecipes: newFavoriteRecipes } }
    );
  }

  res.status(201).json({ message: 'Added to favorite' });
};

module.exports = {
  addFavoriteController,
};