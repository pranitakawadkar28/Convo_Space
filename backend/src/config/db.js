import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Database connected successfully!!");
  } catch (error) {
    console.error("❌ Error occurred while connecting to DB:", error.message);
    process.exit(1);
  }
};

export default connectDb;
