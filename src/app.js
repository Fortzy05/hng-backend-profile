import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import profileRoute from "./routes/profile.js";

dotenv.config(); // loads .env into process.env

const app = express();

// middleware
app.use(cors());
app.use(express.json()); // parse JSON bodies

// register the /me route (requests to /me will use profileRoute)
app.use("/me", profileRoute);

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Route not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
