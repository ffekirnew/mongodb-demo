const mongoose = require("mongoose");

// Connecting to the database
mongoose
  .connect(
    "mongodb+srv://ffekirnew:KA8VG3Id6rU242xE@cluster0.ybkwa1w.mongodb.net/demo_with_rihana",
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

// Creating a structure of the data to be stored
const userSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
});
const User = mongoose.model("User", userSchema);

// Now, will demonstrate CRUD
async function crudDemo() {
  // Find all users
  const users = await User.find();
  console.log("All Users: ", users);

  // Create a new user
  const createdUser = await User.create({
    username: "Rihana",
    password: "Pa$$word",
  });
  console.log("New created user: ", createdUser);

  // Get a user by id
  const userById = await User.findById(createdUser._id);
  console.log("User found by Id: ", userById);

  // Update a user
  await User.findOneAndUpdate(
    { _id: createdUser._id },
    {
      username: "Rihanaaaaaaa",
    },
  );
  const updatedUser = await User.findById(createdUser._id);
  console.log("Updated User: ", updatedUser);

  // Delete a user
  const deletedUser = await User.findOneAndDelete({ _id: createdUser._id });
  console.log("Deleted User: ", deletedUser);
}

// Call the demo
crudDemo();
