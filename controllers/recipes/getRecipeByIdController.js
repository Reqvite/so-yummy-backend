const { Recipe } = require("../../models/recipesModel");
const { getRecipeById } = require("../../service/recipesServise");
const { ObjectId } = require("mongodb");

async function getRecipeByIdController(req, res) {
  const { id } = req.params;

  const recipe = await Recipe.aggregate([
    {
      $match: {
        _id: ObjectId(id),
      },
    },
    {
      $lookup: {
        from: "ingredients",
        localField: "ingredients.id",
        foreignField: "_id",
        as: "ingr_nfo",
      },
    },
    {
      $set: {
        ingredients: {
          $map: {
            input: "$ingredients",
            in: {
              $mergeObjects: [
                "$$this",
                {
                  $arrayElemAt: [
                    "$ingr_nfo",
                    {
                      $indexOfArray: ["$ingr_nfo._id", "$$this.id"],
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    },
    {
      $unset: ["ingr_nfo", "ingredients.id"],
    },
  ]);

  return res.json(recipe[0]);
}

module.exports = {
  getRecipeByIdController,
};
