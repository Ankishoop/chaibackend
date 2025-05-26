const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/youtubeReg", {
    family: 4,
  })
  .then(() => {
    console.log("connection sucess");
  })
  .catch((err) => {
    console.log(err);
  });
