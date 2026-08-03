import express from "express";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.get("/", getTasks);

router.post("/", createTask);

// 📝 Title Edit ke liye (PUT /api/tasks/:id)
router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

// ✅ Checkbox Toggle ke liye (PATCH /api/tasks/:id)
router.patch("/:id", toggleTask);

export default router;