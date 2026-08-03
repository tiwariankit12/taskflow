import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

const express = require("express");
const cors = require("cors");
const app = express();

// 1. CORS Configuration (Sabhi Request allow karne ke liye)
app.use(
  cors({
    origin: "*", // Ya fir specific: "https://taskflow-frontend-ankit0503.vercel.app"
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// 2. Express Body Parser (JSON handling ke liye compulsory hai)
app.use(express.json());

// ... Aage aapke baki authentication aur task routes rahenge

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});