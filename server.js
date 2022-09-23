const express = require("express");
dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

// middleware
app.use(express.json());
app.use(cors());
app.use("/api/projects", require("./routes/projectsRoutes"));

// listen
app.listen(port, () => {
  console.log("listening on port " + port);
});
