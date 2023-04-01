const { getShoppingList } = require("../../service/shopping");

const getShoppingListController = async (req, res) => {
  const { _id } = req.user;
  const ingredinets = await getShoppingList(_id);
  res.json({ status: "succes", code: 200, ingredinets });
};

module.exports = {
  getShoppingListController,
  getShoppingList,
};
