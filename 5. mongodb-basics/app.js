const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://solarluiso:ZDHYQTrz8zczfryG@cluster0.ha7mr.mongodb.net/"
  )
  .then(() => console.log("database connected successfully"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

//create user model
const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    //create a new document
    const newUser = await User.create({
      name: "New User",
      email: "newuser@gmail.com",
      age: "14",
      isActive: true,
      tags: ["developer"],
    });
    console.log("Created new user:", newUser);

    // this way also works...
    // const newUser = new User({
    //   name: "New User",
    //   email: "newuser@gmail.com",
    //   age: "75",
    //   isActive: false,
    //   tags: ["developer", "designer"],
    // });
    // await newUser.save();
    // console.log("Created new user:", newUser);

    const updateUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 100 },
        $push: { tags: "updated" },
      },
      { new: true }
    );
    console.log("Updated user", updateUser);

    // const deletedUser = await User.findByIdAndDelete(newUser._id);
    // console.log("deleted user ->", deletedUser);

    // const allUsers = await User.find({});
    // console.log(allUsers);

    // const getUserOfActiveFalse = await User.find({ isActive: false });
    // console.log(getUserOfActiveFalse);

    // const getJohnDoeUser = await User.findOne({ name: "John Doe" });
    // console.log(getJohnDoeUser);

    // const getLastCreatedUserByUserId = await User.findById(newUser._id);
    // console.log(getLastCreatedUserByUserId, "getLastCreatedUserByUserId");

    // const selectedFields = await User.find().select("name email -_id");
    // console.log(selectedFields);

    // const limitedUsers = await User.find().limit(5).skip(1);
    // console.log(limitedUsers);

    // const sortedUsers = await User.find().sort({ age: 1 });
    // console.log(sortedUsers);
    // note: "age: -1" -> for sorting on a descending order

    // const countDocuments = await User.countDocuments({ isActive: false });
    // console.log(countDocuments);
  } catch (e) {
    console.log("Error ->", e);
  } finally {
    await mongoose.connection.close();
  }
}
runQueryExamples();
