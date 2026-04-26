import axios from "axios";

// Create axios instance
const API = axios.create({
  baseURL: "/api",
});

// Get all users
export const getUsers = async () => {
  try {
    const res = await API.get("/users");
    return res.data;
  } catch (err) {
    console.error("Error fetching users:", err.message);
    throw err;
  }
};

// Create user
export const createUser = async (userData) => {
  try {
    const res = await API.post("/users", userData);
    return res.data;
  } catch (err) {
    console.error("Error creating user:", err.message);
    throw err;
  }
};

// delete user
export const deleteUser = async (id) => {
  try {
    const res = await API.delete(`/users/${id}`);
    return res.data;
  } catch (err) {
    console.error("Error deleting user:", err.message);
    throw err;
  }
};

// update user
export const updateUser = async (id, data) => {
  try {
    const res = await API.put(`/users/${id}`, data);
    return res.data;
  } catch (err) {
    console.error("Error updating user:", err.message);
    throw err;
  }
};

export default API;