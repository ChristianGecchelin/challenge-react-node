const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const phonesRoutes = require("./routes/phones.routes");
app.use("/phones", phonesRoutes);
app.use(cors());
app.listen(5005, () => console.log("🏃‍ on port 5005"));
console.log("holas");
