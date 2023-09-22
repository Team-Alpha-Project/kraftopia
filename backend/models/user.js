const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  // username: {
  //   type: String,
  //   required: true,
  // },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // confirmPassword: {
  //   type: String,
  //   required: true,
  // },
});

// hashing the password
userSchema.pre("save", async function (next) {
  if (this.isModified("pwd")) {
    this.pwd = await bcrypt.hash(this.pwd, 12);
    // this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
  }
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
