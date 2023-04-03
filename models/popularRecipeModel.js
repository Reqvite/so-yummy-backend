const { Schema, model } = require('mongoose');

const popularSchema = Schema(
  {
    idFood: {
      type: String,
      required: true,
    },
    strFood: {
      type: String,
      required: true,
    },
    strInstructions: {
      type: String,
      required: true,
    },
    strFoodThumb: {
      type: String,
      required: true,
    },
    users: {
      type: Array,
      required: true,
    },
  },
  { versionKey: false }
);

const PopularRecipes = model('popularRecipe', popularSchema);

module.exports = { PopularRecipes };
