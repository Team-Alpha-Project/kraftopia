const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
require("./db/conn");
// const User = require("./models/user");
const app = express();
app.use(express.json());
app.use(require("./router/auth"));
const PORT = process.env.PORT;



const middleware = (req, res, next) => {
  console.log("hiiiiii im a middleeaware");
  next();
};



// const corsOptions = {
//   origin: "http://localhost:3000", // Replace with your frontend's origin
//   credentials: true, // Enable passing cookies and headers with credentials
// };

// app.use(cors(corsOptions));

// app.get("/", (req, res) => {
//   res.send("hello world SERVER app.js");
// });
// app.get("/register", (req, res) => {
//   res.send("hello register here app.js ");
// });
// app.get("/login", middleware, (req, res) => {
//   res.send("hello login here ");
// });
// app.get("/about", (req, res) => {
//   res.send("hello login here ");
// });
// app.get("/contact", (req, res) => {
//   res.send("hello login here ");
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🔥`);
});
