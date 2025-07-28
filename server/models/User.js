import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },

  password: {
    type: String,
    required: true
  },

  favorites: [
    {
      name: String,
      image: String,
      types: [String],
      stats: [
        {
          name: String,
          value: Number
        }
      ]
    }
  ]
});

export default mongoose.model("User", userSchema);
