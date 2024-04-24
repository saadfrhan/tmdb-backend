import mongoose from "mongoose";

export default async function connectDB() {
  try {
    const url = process.env.DATABASE_URL!;
    if (!url) {
      console.error("Error: DATABASE_URL not found");
      process.exit(1);
    }
    await mongoose.connect(url);
    console.log("Successfully connected to the database");
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1);
  }
}
