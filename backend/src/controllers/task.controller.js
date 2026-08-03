import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find().sort({
    createdAt: -1,
  });

  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title } = req.body;

  const task = await Task.create({
    title,
  });

  res.status(201).json(task);
};

// 🆕 EDIT / UPDATE TASK CONTROLLER
export const updateTask = async (req, res) => {
  try {
    const { title, completed } = req.body;

    // { new: true } zaroori hai taaki updated document return ho
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, completed },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);

  res.json({
    message: "Task Deleted",
  });
};

export const toggleTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  task.completed = !task.completed;

  await task.save();

  res.json(task);
};