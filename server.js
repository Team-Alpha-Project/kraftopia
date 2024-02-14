import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

// config env
dotenv.config();
// dotenv.config({path:""})
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

//database config
connectDB();

app.get("/", (req, res) => {
  res.send(`<h1>welcome to ecommerce app</h1>`);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`.bgYellow.black);
});
