import { validationResult } from "express-validator";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { user_response } from "../utilities/users/user_response.js";

dotenv.config();
const secretKey = process.env.TOKEN_SECRET;

export const user_registration = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()[0] });
    }

    // Data from body
    const data = req.body;

    // Finding user if exist or not
    const userExist = await User.findOne({ email: data.email });

    // Check for existing email
    if (userExist) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(data.password, 10); // Use async/await for bcrypt
    data.password = hashedPassword;

    const newUser = new User(data);
    const savedUser = await newUser.save();

    // Create token and store user data
    const token = jwt.sign(
      { _id: savedUser._id, email: savedUser.email },
      secretKey
    );

    res.status(201).json({
      message: "User registered successfully",
      user: user_response(savedUser),
      token,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const user_login = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()[0] });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate a JWT token with user data in the payload
    const token = jwt.sign({ _id: user._id, email: user.email }, secretKey);
    res
      .status(200)
      .json({ message: "Login successful", user: user_response(user), token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
