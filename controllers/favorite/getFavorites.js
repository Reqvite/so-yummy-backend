const { mongoose } = require('mongoose');
const { setPaginationSlice } = require('../../helpers/setPaginationSlice');
const { User } = require('../../models/userModel');
const { RestApiError } = require('../../helpers/errors');

const getFavoritesController = async (req, res) => {
  const { _id } = req.user;

  const data = await User.aggregate([
    {
      $match: { _id: mongoose.Types.ObjectId(_id) },
    },
    {
      $project: {
        _id: 0,
        favoriteRecipes: 1,
      },
    },
    {
      $unwind: '$favoriteRecipes',
    },
    {
      $lookup: {
        from: 'popularrecipes',
        localField: 'favoriteRecipes.foodId',
        foreignField: '_id',
        as: 'foodInfo',
      },
    },
    {
      $unwind: '$foodInfo',
    },
    {
      $project: {
        idFood: '$foodInfo.idFood',
        addedOn: '$favoriteRecipes.addedOn',
        strFood: '$foodInfo.strFood',
        strInstructions: '$foodInfo.strInstructions',
        strFoodThumb: '$foodInfo.strFoodThumb',
      },
    },
    {
      $sort: { addedOn: -1 },
    },
  ]);

  const { page = 1, perPage = data.length } = req.query;

  if (data.length === 0) {
    return res.json({ totalHits: 0, meals: [] });
  }

  const pagination = setPaginationSlice(page, perPage, data.length);
  if (!pagination) {
    throw RestApiError ('Incorrect pagination params');
  }

  res.json({
    totalHits: data.length,
    foods: data.slice(pagination.start, pagination.end),
  });
};

module.exports = {
  getFavoritesController,
};