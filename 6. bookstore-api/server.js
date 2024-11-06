require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const bookRoutes = require("./routes/book-routes");

// initialize express app & set up middleware
const app = express();
app.use(express.json());

// connect to database
connectToDB();

//routes
app.use("/api/books", bookRoutes);

// set up server to listen on specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
