import express from "express";
import cors from "cors";

import taskRoutes from "./routes/task.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// Enable CORS for all routes cleanly
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

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