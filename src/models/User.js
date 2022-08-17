import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, trim: true },
  id: { type: String, required: true, unique: true, trim: true },
  password: { type: String, trim: true },
});

const User = mongoose.model("User", userSchema);

export default User;
