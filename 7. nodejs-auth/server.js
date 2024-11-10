require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const authRoutes = require("./routes/auth-routes");

// initialize express app & set up middleware
const app = express();
app.use(express.json());

// connect to database
connectToDB();

// routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
