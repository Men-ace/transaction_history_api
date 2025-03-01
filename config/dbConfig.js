import mongoose from "mongoose";

const DB_CONNECTION_URI = process.env.CONNECTION_URI + "/transaction-history-oct"

export const connectToMongoDb = () => {
  try {
    const connect = mongoose.connect(DB_CONNECTION_URI)
    if(connect) {
      console.log("Database connected");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}