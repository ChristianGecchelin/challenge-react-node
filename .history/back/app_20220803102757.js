const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const phones = require("./routes/phones.routes");
app.use("/phones", phones);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => console.log("🏃‍ on port 3000"));
console.log("hola");
