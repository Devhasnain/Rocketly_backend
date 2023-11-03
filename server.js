import express from "express";
import { DB_CONNECTION } from "./db.js";
import dotenv from "dotenv";
import user_routes from "./routes/user.js";
import cors from  'cors'

const app = express();
const port = 3000;

dotenv.config();

app.use(cors())
app.use(express.json())

// Connect to MongoDB
DB_CONNECTION();

console.log('server')
// initilized routes
app.use("/users", user_routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
