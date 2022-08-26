import mongoose from "mongoose";
import CryptoJS from "crypto-js";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, trim: true },
  id: { type: String, required: true, unique: true, trim: true },
  password: { type: String, trim: true },
});

userSchema.pre("save", async function () {
  this.password = CryptoJS.AES.encrypt(this.password, "kustagram").toString();
});

const User = mongoose.model("User", userSchema);

export default User;
