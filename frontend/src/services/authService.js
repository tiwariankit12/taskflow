import axios from "axios";

const API = axios.create({
  baseURL: "https://taskflow-backend-t51m.onrender.com/api/auth",
});

export const registerUser = (data) =>
  API.post("/register", data);

export const loginUser = (data) =>
  API.post("/login", data);