// const { default: mongoose } = require("mongoose");

const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    conf_password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Registor = mongoose.model("Registor", RegisterSchema);

module.exports = Registor;

// const data = new User({
//   name: "Ankish",
// });

// data.save();
