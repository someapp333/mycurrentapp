const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  situation: {
    type: String,
    required: true,
  },
  goal: {
    type: String,
    required: true,
  }
});

const Form = mongoose.model("Formbis", FormSchema);

module.exports = { Form };