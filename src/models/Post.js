import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
//  time: { type: },
  image: { type: String },
  location: { type: String },
  like: { type: Number },
  comment: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  text: { type: String }
});

const Post = mongoose.model("Post", postSchema);

export default Post;
