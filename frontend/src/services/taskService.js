import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
});

// Attach JWT Token if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// 1. Fetch all tasks
export const getTasks = () => API.get("/");

// 2. Create a new task
export const createTask = (title) => API.post("/", { title });

// 3. Delete a task
export const deleteTask = (id) => API.delete(`/${id}`);

// 4. Toggle task status
export const toggleTask = (id) => API.patch(`/${id}`);

// 5. Update/Edit task title
export const updateTask = (id, updatedData) => API.put(`/${id}`, updatedData);