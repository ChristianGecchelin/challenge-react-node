const express = require("express");
const cors = require("cors"); //use this
const app = express();

const data = require("../data/phones.json");
const router = require("express").Router();

app.use(cors());

router.get("/phones", (req, res, next) => {
  res.json(data);
});

router.get("/phones/:phoneId"),
  (req, res, next) => {
    phoneId = 2;
    console.log(req.params);
    const found = data.find((phone) => phone["id"] == phoneId);
    return res.json(found);
  };

module.exports = router;
