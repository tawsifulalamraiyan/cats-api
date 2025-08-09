import mongoose from "mongoose";

const mongodb = async () => {
  const uri =
    "mongodb+srv://raiyan:raiyan2002@cluster0.0wvpgdb.mongodb.net/Cats_database?retryWrites=true&w=majority&appName=Cluster0";

  try {
    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default mongodb;
