import { useEffect, useState, useCallback } from "react";

import {
  getTasks,
  createTask,
  deleteTask,
  toggleTask,
  updateTask,
} from "../services/taskService";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  const loadTasks = useCallback(async () => {
    try {
      const res = await getTasks();
      // Handle both array direct response or res.data response
      const taskData = Array.isArray(res.data) ? res.data : res.data?.tasks || [];
      setTasks(taskData);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  // 1. Add Task
  async function addTask(title) {
    if (!title.trim()) return;
    try {
      await createTask(title);
      await loadTasks();
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  }

  // 2. Delete Task
  async function removeTask(id) {
    if (!id) return;
    try {
      await deleteTask(id);
      await loadTasks();
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  }

  // 3. Toggle Task Completion
  async function completeTask(id) {
    if (!id) return;
    try {
      await toggleTask(id);
      await loadTasks();
    } catch (error) {
      console.error("Failed to toggle task:", error);
    }
  }

  // 4. Edit/Update Task Title
  async function editTask(id, updatedData) {
    if (!id) return;
    
    // String wrapper fallback (agar frontend se direct string pass hoti hai)
    const payload = typeof updatedData === "string" ? { title: updatedData } : updatedData;

    try {
      await updateTask(id, payload);
      await loadTasks();
    } catch (error) {
      console.error("Failed to edit task:", error);
    }
  }

  // Safe Search Filter
  const filtered = tasks.filter((task) =>
    (task?.title || "").toLowerCase().includes((search || "").toLowerCase())
  );

  return {
    tasks: filtered,
    allTasks: tasks,
    addTask,
    deleteTask: removeTask,
    toggleTask: completeTask,
    editTask,
    search,
    setSearch,
  };
}