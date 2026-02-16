const mongoose = require("mongoose");
require("dotenv").config();

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  try {
    // Return cached connection if already connected
    if (cached.conn) {
      console.log("✅ MongoDB already connected (cached).");
      return cached.conn;
    }

    // Check if MongoURL exists
    if (!process.env.MongoURL) {
      console.error("❌ MongoURL is not defined in your environment variables!");
      return null; // Stop if no URI
    }

    // Create new connection promise if not already
    if (!cached.promise) {
      cached.promise = mongoose.connect(process.env.MongoURL, {
        serverSelectionTimeoutMS: 8000,
        connectTimeoutMS: 8000,
      }).then(conn => {
        console.log("✅ MongoDB connected successfully!");
        return conn;
      }).catch(err => {
        cached.promise = null;
        console.error("❌ MongoDB connection error:", err.message);
        throw err;
      });
    }

    cached.conn = await cached.promise;
    return cached.conn;

  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err.message);
    return null;
  }
}

module.exports = connectDB;
