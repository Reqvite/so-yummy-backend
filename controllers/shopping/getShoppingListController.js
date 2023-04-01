const { getShoppingList } = require("../../service/shopping");

const getShoppingListController = async (req, res) => {
  const { _id } = req.user;
  const ingredients = await getShoppingList(_id);
  res.json({ status: "succes", code: 200, ingredients });
};

module.exports = {
  getShoppingListController,
  getShoppingList,
};
