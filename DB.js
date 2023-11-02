import mongoose from "mongoose";


export const DB_CONNECTION = () => {
    mongoose
    .connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected");
    })
    .catch((error) => {
      console.log("not connected");
    });
};
