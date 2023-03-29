const { RestApiError } = require("./errors");

const asyncWrapper = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch(next);
  };
};

const errorHandler = (err, req, res, next) => {
  if (err instanceof RestApiError) {
    return res
      .status(err.status)
      .json({ status: err.type, code: err.status, message: err.message });
  }
  res.status(500).json({ message: err.message });
};

module.exports = {
  errorHandler,
  asyncWrapper,
};
