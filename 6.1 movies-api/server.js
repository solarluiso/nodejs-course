const express = require("express");
const connectToDB = require("../6.1 movies-api/database/db");

// initialize express app & set up middleware
const app = express();
app.use(express.json());

// connect database
connectToDB();

// set up server to listen to a specific port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is now running at port ${PORT}`);
});
