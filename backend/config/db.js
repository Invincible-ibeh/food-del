import mongoose from "mongoose";
require('dotenv').config(); // Read the secrets from the scroll
const dbURI = process.env.MONGO_URI; // Fetch the MongoDB URI



export const connectDB = async () => {
    await mongoose.connect(
      'dbURI'
    ).then(()=>console.log("DB Connected"));
}