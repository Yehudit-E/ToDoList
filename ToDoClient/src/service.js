// import axios from 'axios';

// const apiUrl = "http://localhost:5204"

// export default {
//   getTasks: async () => {
//     const result = await axios.get(`${apiUrl}/items`)    
//     return result.data;
//   },

//   addTask: async(name)=>{
//     console.log('addTask', name)
//     //TODO
//     return {};
//   },

//   setCompleted: async(id, isComplete)=>{
//     console.log('setCompleted', {id, isComplete})
//     //TODO
//     return {};
//   },

//   deleteTask:async()=>{
//     console.log('deleteTask')
//   }
// };


// import axios from 'axios';

// const apiUrl = "http://localhost:5204";

// export default {
//   getTasks: async () => {
//     try {
//       const result = await axios.get(`${apiUrl}/items`);
//       return result.data; // מחזיר את התוצאה שהתקבלה
//     } catch (error) {
//       console.error("Error fetching tasks:", error);
//       throw new Error("Could not fetch tasks");
//     }
//   },

//   addTask: async (name) => {
//     try {
//       const result = await axios.post(`${apiUrl}/items`, { name ,IsComplete:false });
//       console.log('Task added successfully:', result.data);
//       return result.data; // מחזיר את המשימה שנוספה
//     } catch (error) {
//       console.error("Error adding task:", error);
//       throw new Error("Could not add task");
//     }
//   },

//   setCompleted: async (id, isComplete) => {
//     try {
//       const result = await axios.put(`${apiUrl}/items/${id}`, { isComplete });
//       console.log('Task updated successfully:', result.data);
//       return result.data; // מחזיר את המשימה המעודכנת
//     } catch (error) {
//       console.error("Error updating task:", error);
//       throw new Error("Could not update task");
//     }
//   },

//   deleteTask: async (id) => {
//     try {
//       const result = await axios.delete(`${apiUrl}/items/${id}`);
//       console.log('Task deleted successfully:', result.data);
//       return result.data; // מחזיר את התוצאה לאחר מחיקת המשימה
//     } catch (error) {
//       console.error("Error deleting task:", error);
//       throw new Error("Could not delete task");
//     }
//   }
// };


// import axios from 'axios';

// const api = axios.create({
//   baseURL: "http://localhost:5204",
//   timeout: 5000,
//   headers: {
//     "Content-Type": "application/json"
//   }
// });

// // Interceptor לטיפול בשגיאות
// api.interceptors.response.use(
//   response => response,
//   error => {
//     console.error("API Error:", error.response?.status, error.message);
//     return Promise.reject(new Error("API request failed"));
//   }
// );

// export default {
//   getTasks: async () => {
//     const result = await api.get("/items");
//     return result.data;
//   },

//   addTask: async (name) => {
//     const result = await api.post("/items", { name, IsComplete: false });
//     console.log('Task added successfully:', result.data);
//     return result.data;
//   },

//   setCompleted: async (id, isComplete) => {
//     const result = await api.put(`/items/${id}`, { isComplete });
//     console.log('Task updated successfully:', result.data);
//     return result.data;
//   },

//   deleteTask: async (id) => {
//     const result = await api.delete(`/items/${id}`);
//     console.log('Task deleted successfully:', result.data);
//     return result.data;
//   }
// };

import axios from 'axios';

// הגדרת baseURL גלובלי
axios.defaults.baseURL = "http://localhost:5204";
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
