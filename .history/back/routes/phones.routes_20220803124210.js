const express = require("express");
const cors = require("cors"); //use this
const app = express();

const data = require("../data/phones.json");
const router = require("express").Router();

app.use(cors());

router.get("/phones", (req, res, next) => {
  res.json(data);
});
router.get("/phones/:id", (req, res, next) => {
  const { id } = req.params;
  const foundPhone = data.find((phone) => {
    console.log(phone.id == id);
    return phone.id == id;
  });
  res.json(foundPhone);
});

module.exports = router;
