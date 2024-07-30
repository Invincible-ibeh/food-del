import mongoose from "mongoose";
require('dotenv').config(); // Read the secrets from the scroll
const dbURI = process.env.MONGO_URI; // Fetch the MongoDB URI



export const connectDB = async () => {
    await mongoose.connect(
      'mongodb+srv://miradmayor:UC6KPQQeo8llaHrgibehm@cluster0.vf7rcnw.mongodb.net/food-del'
    ).then(()=>console.log("DB Connected"));
}