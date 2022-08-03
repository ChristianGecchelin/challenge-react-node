const express = require("express");

const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => console.log("🏃‍ on port 3000"));
console.log("hola");
