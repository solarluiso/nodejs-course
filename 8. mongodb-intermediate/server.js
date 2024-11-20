require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const productRoutes = require("./routes/product-routes");

const app = express();

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongodb connected successfully!"))
  .catch((e) => console.log(e));

// use middleware
app.use(express.json());

app.use("/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is now running on port ${process.env.PORT}`);
});
