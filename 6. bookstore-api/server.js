require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");

//connect to our database
connectToDB();

//middleware -> express.json()
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
