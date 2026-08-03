import express from "express";

import {
  getTasks,
  createTask,
  updateTask, // 👈 New import
  deleteTask,
  toggleTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);

// 🆕 Text edit / Title update ke liye PUT route
router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

// Toggle ke liye specific route path rakhein
router.patch("/:id/toggle", toggleTask);

export default router;