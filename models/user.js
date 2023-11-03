import mongoose from "mongoose";

// Define a Mongoose Schema and Model for User
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true, // Ensures unique index for email
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("users", userSchema);
