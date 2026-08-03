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