const data = require("../data/phones.json");
const router = require("express").Router();
console.log(data);
router.get("/phones", (req, res, next) => {
  User.find()
    .then((allUsers) => {
      res.json(allUsers);
    })
    .catch((err) => next(err));
});
