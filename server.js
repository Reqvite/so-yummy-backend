const app = require("./app");
const { connectMongo } = require("./db/connection");

const start = async () => {
  try {
    await connectMongo();
    app.listen(process.env.PORT, () => {
      console.log("Database connection successful");
    });
  } catch (err) {
    console.error("Error at server launch", err);
    process.exit(1);
  }
};

start();
