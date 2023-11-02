import express from "express";
import { DB_CONNECTION } from "./DB.js";

const app = express();
const port = 3000;

// Connect to MongoDB
// DB_CONNECTION();

app.get("/", async (req, res) => {
  res.json("Server is working");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
