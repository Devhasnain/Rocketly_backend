import mongoose from "mongoose";

export const DB_CONNECTION = () => {
  mongoose
    .connect("your-mongodb-connection-url", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};
