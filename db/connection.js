const mongoose = require("mongoose");

const connectMongo = async () => {
  mongoose.set("strictQuery", true);
  return mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  connectMongo,
};
