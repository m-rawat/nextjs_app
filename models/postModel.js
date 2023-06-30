import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
});

mongoose.models = {};

const postModel = mongoose.model("post", postSchema);
export default postModel;
