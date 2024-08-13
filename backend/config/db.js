// import mongoose from "mongoose";

// import dotenv from "dotenv";
// dotenv.config();


// const dbURI = process.env.MONGO_URI; // Fetch the MongoDB URI




// export const connectDB = async () => {
//     await mongoose.connect(
//       'dbURI'
//     ).then(()=>console.log("DB Connected"));
// }

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbURI = process.env.MONGO_URI; // Fetch the MongoDB URI

export const connectDB = async () => {
  await mongoose
    .connect(
      dbURI // Use the actual dbURI variable here
    )
    .then(() => console.log("DB Connected"))
    .catch((error) => console.error("DB Connection Error:", error));
};

