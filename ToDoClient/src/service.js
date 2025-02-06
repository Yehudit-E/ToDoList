
import axios from 'axios';

// הגדרת baseURL גלובלי
axios.defaults.baseURL = process.env.REACT_APP_API_URL;;
axios.defaults.timeout = 5000;
axios.defaults.headers["Content-Type"] = "application/json";

// Interceptor לטיפול בשגיאות
axios.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error.response?.status, error.message);
    return Promise.reject(new Error("API request failed"));
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get("/items");
    return result.data;
  },

  addTask: async (name) => {
    const result = await axios.post("/items", { name, IsComplete: false });
    console.log('Task added successfully:', result.data);
    return result.data;
  },

  setCompleted: async (id, isComplete) => {
    const result = await axios.put(`/items/${id}`, { isComplete });
    console.log('Task updated successfully:', result.data);
    return result.data;
  },

  deleteTask: async (id) => {
    const result = await axios.delete(`/items/${id}`);
  } 
}
