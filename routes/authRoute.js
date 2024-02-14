import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router();

//routing
//register || method POST
router.post("/register", registerController);

//login || POST
router.post("/login", loginController);

// test Routes
//requireSignIn is the middleware here need t provide JWT token is in the login
router.get("/test", requireSignIn, isAdmin, testController);

//routes for admin users

//routes for user
export default router;
