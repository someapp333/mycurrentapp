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
  },
  time : { 
    type : Date, 
    default: Date.now 
  }
});

const Form = mongoose.model("Form", FormSchema);

module.exports = { Form };
