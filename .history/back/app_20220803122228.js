const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const phonesRoutes = require("./routes/phones.routes");
app.use("/", phonesRoutes);

app.listen(5005, () => console.log("🏃‍ on port 5005"));
