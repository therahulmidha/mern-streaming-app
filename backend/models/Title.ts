import mongoose from "mongoose";
const titleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  programType: {
    type: String,
    enum: ["series", "movie"],
    required: true,
  },
  images: {
    "Poster Art": {
      url: { type: String },
      width: { type: Number },
      height: { type: Number },
    },
  },
  releaseYear: {
    type: Number,
  },
});

export default mongoose.model("title", titleSchema);
