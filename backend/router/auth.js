const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
require("../db/conn");

const User = require("../models/user");

router.get("/", (req, res) => {
  // Redirect to the "/home" route
  // res.redirect("/Home");
  res.send("hiiii ");
});

// using promises 👇🏻

// router.post("/register",async (req, res) => {
//   const { username, email, password, confirmPassword } = req.body;

//   if (!username || !email || !password || !confirmPassword) {
//     return res.json({ error: "please all the places/inputs" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res
//           .status(422)
//           .json({ msg: "user already exists go for login" });
//       }

//       const user = new User({ username, email, password, confirmPassword });
//       user
//         .save()
//         .then(() => res.status(201).json({ msg: "data inserted done" }))
//         .catch((err) =>
//           res.status(500).json({ error: "data failed to insert" })
//         );
//     })
//     .catch((err) => {
//       res
//         .status(500)
//         .json({ error: "something went wrong in the find method" });
//     });
// });

// using async and await 👇🏻// just for now
router.post("/register", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username || !email || !password || !confirmPassword) {
    return res.json({ error: "please fill up all fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ msg: "user already exists go for login" });
    } else if (password != confirmPassword) {
      res.status(422).json({ error: "Password are not matching" });
    } else {
      const user = new User({
        username,
        email,
        password,
        confirmPassword,
      });
      // hashing here
      await user.save();
      res.status(201).json({ msg: "data instered successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "something went wrong in the find method" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please enter your credentials" });
    }
    const userLogin = await User.findOne({ email: email });
    if (!userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        res.status(400).json({ error: "invalid credentials pass" });
      } else {
        res.json({ msg: "user login successfully" });
      }
    } else {
      res.status(400).json({ error: "invalid credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
