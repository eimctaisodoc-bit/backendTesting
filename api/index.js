const express = require("express");
const connectDB = require("./db");
const app = express();
app.use(express.json());

 connectDB();
// Your route
app.get("/", async (req, res) => {
  // try {
  // } catch (error) {
  //   console.error("Error connecting to MongoDB:", error);
  //   return res.status(500).send("Failed to connect to MongoDB");
  // }
  // console.log("Connected to MongoDB");
  res.send("Hello World!");
});

// ✅ Export the app directly
module.exports = app;
// console.log(process.env.MongoURL);
// app.listen(process.env.PORT || 3000, () => {
//   console.log("Server is running on port " + (process.env.PORT || 3000));
// });