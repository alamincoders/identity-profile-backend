const express = require("express");
dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/ErrorMiddleware");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/api/projects", require("./routes/projectsRoutes"));
app.use(errorHandler);

// listen
app.listen(port, () => {
  console.log("listening on port " + port);
});
