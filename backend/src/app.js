import express from "express";
import cors from "cors";

import taskRoutes from "./routes/task.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(
  cors({
    origin: "*", // Allows requests from Vercel & localhost
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
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