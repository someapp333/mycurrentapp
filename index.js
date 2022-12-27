const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const { Form } = require("./models");

const app = express();

app.use(cors())

app.use(express.json());

app.post("/form", async (req, res) => {
  try {
    const newForm = new Form({ ...req.body });
    const insertedForm = await newForm.save();
    return res.status(201).json(insertedForm);
  } catch {
    return res.status(501);
  }
});

app.get("/", async (req, res) => {
  return res.json({ message: "Hello, World ✌️" });
});

const start = async () => {
  try {
    await mongoose.connect(process.env.URL);
    app.listen(3001, () => console.log("Server started on port 3001"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();