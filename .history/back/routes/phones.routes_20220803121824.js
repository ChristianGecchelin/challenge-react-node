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
    data
      .find((phone) => phone["id"] == id)
      .then((phone) => {
        console.log(phone);
        return res.json(phone);
      })
      .catch((err) => console.log(err));
  };

module.exports = router;
