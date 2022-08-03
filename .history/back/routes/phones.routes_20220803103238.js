const data = require("../data/phones.json");
const router = require("express").Router();
console.log(data);

router.get("/phones", (req, res, next) => {
  res.json(data);
});
