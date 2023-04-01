const { Recipe } = require("../../models/recipesModel");

const getRecipes = async (req, res) => {
  const result = await Recipe.find({}, "-createdAt -updatedAt");
  res.json(sortRecipes(result));
};

const sortRecipes = (arr) => {
  let list = {};
  arr.forEach((item) => {
    if (!list[item.category]) {
      if (Object.keys(list).length < 4) {
        list[item.category] = [];
      }
    }
    if (list[item.category] && list[item.category].length < 4) {
      list[item.category].push(item);
    }
  });
  return list;
};

module.exports = {
  getRecipes,
};
