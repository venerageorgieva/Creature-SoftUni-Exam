const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  //
  firstName: { type: String, required: true, minLength: 3 },
  lastName: { type: String, required: true, minLength: 3  },
  email: {
    type: String,
    required: true,
    minLength: 10,
    unique: {
      value: true,
      message: "Email already exists!",
    },
  },
  password: { type: String, required: true,minLength: 4 },
});

userSchema.virtual("repeatPassword").set(function (value) {
  if (value !== this.password) {
    throw new Error("Password missmatch!");
  }
});

userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
});

const User = mongoose.model("User", userSchema);
module.exports = User;
