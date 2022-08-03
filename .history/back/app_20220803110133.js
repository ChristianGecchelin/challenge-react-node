const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const phonesRoutes = require("./routes/phones.routes");
app.use("/phones", phonesRoutes);
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.listen(5005, () => console.log("🏃‍ on port 5005"));
console.log("holas");
