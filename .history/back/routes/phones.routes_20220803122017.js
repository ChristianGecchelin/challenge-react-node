const express = require("express");
const cors = require("cors"); //use this
const app = express();

const data = require("../data/phones.json");
const router = require("express").Router();

app.use(cors());

router.get("/", (req, res, next) => {
  res.json(data);
});

router.get("/:id"),
  (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    const found = data.find((phone) => phone.id == id);
    res.json(found);
  };

module.exports = router;
