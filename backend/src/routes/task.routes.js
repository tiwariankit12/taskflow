import express from "express";

import {
  getTasks,
  createTask,
  deleteTask,
  toggleTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.get("/", getTasks);

router.post("/", createTask);

router.delete("/:id", deleteTask);

router.patch("/:id", toggleTask);

export default router;