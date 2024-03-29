import { comparePassword, hashPassword } from "../helper/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validation
    // Check if the required fields are present
    if (!name || !email || !password || !phone || !address) {
      return res.status(400).send({
        error:
          "Name, Email, Password, Phone Number, and Address are all required fields.",
      });
    }

    //check user
    const existingUser = await userModel.findOne({ email });

    //existing user check
    if (existingUser) {
      return res.status(200).json({
        success: true,
        message: `Already Register Please Login`,
      });
    }
    //registered user
    const hashedPassword = await hashPassword(password);
    //to save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: `User Registered Successfully`,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: `Error in registration`,
      error: error.message, // Send the error message in the response
    });
  }
};

//POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Email and Password are required fields",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    //compare the password
    // fisrt check whether the user is registered or no
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    // after the passwrod check token generate
    const token = JWT.sign({ _id: user._id }, process.env.JWT_TOKEN, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "User Logged in Successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error in login`,
      error: error.message, // Send the error message in the response
    });
  }
};

//middleware
export const testController = (req, res) => {
  try {
    res.send({
      message: "Protected Route",
    });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
