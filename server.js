import express from "express";
import { DB_CONNECTION } from "./db.js";
import dotenv from "dotenv";
import user_routes from "./routes/user.js";
import cors from  'cors'

const app = express();

dotenv.config();

app.use(cors())
app.use(express.json())

// Connect to MongoDB
DB_CONNECTION();

// initilized routes
app.use("/users", user_routes);

export default app
