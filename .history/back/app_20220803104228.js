const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const phonesRoutes = require("./routes/phones.routes");
app.use("/phones", phonesRoutes);

app.listen(5005, () => console.log("🏃‍ on port 5005"));
console.log("hola");
