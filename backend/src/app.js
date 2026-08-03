import express from "express";
import cors from "cors";

import taskRoutes from "./routes/task.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// 1. Enable CORS for all origins & explicit HTTP methods
app.use(
  cors({
    origin: true, // Dynamically allows the requesting origin (Vercel, Localhost, etc.)
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// 2. Explicitly handle Preflight OPTIONS requests
app.options("*", cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "TaskFlow API Running 🚀",
  });
});

app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

export default app;