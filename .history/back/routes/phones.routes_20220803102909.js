const data = require("../data/phones.json");
router.get("/users", (req, res, next) => {
  User.find()
    .then((allUsers) => {
      res.json(allUsers);
    })
    .catch((err) => next(err));
});
