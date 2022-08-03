const express = require("express");
const cors = require("cors"); //use this
const app = express();

const data = require("../data/phones.json");
const router = require("express").Router();

app.use(cors());

router.get("/", (req, res, next) => {
  res.json(data);
});

router.get("/phones/:id"),
  (req, res, next) => {
    const { id } = req.params;
    res.json(console.log(id));
  };

module.exports = router;
