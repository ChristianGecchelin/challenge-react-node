const data = require("../data/phones.json");
const router = require("express").Router();
console.log(data);

router.get("/phones", (req, res, next) => {
  res.json(data);
});

router.get("/phones/:id"),
  (req, res, next) => {
    const { id } = req.params;
    console.log(id);
  };

module.exports = router;
