const express = require("express");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDB();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json()); //middleware
app.use("/api/v3/app", require("./routes/eventRoutes"));

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
