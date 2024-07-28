import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(
      'mongodb+srv://miradmayor:UC6KPQQeo8llaHrgibehm@cluster0.vf7rcnw.mongodb.net/food-del'
    ).then(()=>console.log("DB Connected"));
}