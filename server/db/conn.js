const mongoose = require("mongoose");
const DB = process.env.MONGO_DB;
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("no connection");
  });
