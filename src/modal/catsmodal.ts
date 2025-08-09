import mongoose, { Schema } from "mongoose";

const Cats_Schema = new Schema({
  name: String,
  country: String,
  createdAt: { type: Date, default: Date.now },
});

const Cats_data = mongoose.model("cats_data", Cats_Schema);

export default Cats_data;
