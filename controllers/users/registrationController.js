const { registration } = require("../../service/users/registration");

const registrationController = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await registration(name, email, password);

  res.status(201).json({ status: "Created", code: 201, user });
};

module.exports = {
  registrationController,
};
