// const express = require('express');
// const axios = require('axios');
// const app = express();
// const port = process.env.PORT || 3000;

// require('dotenv').config();

// // URL של ה-Render API לשירותים
// const renderApiUrl = "https://api.render.com/v1/services";

// // ה-API Key שהייתה לך ב-Render
// const apiKey = process.env.RENDER_API_KEY;

// // Endpoint להחזרת רשימת האפליקציות
// app.get('/apps', async (req, res) => {
//   try {
//     const response = await axios.get(renderApiUrl, {
//       headers: {
//         Authorization: `Bearer ${apiKey}`,
//       },
//     });

//     res.json(response.data); // מחזיר את המידע כ-JSON
//   } catch (error) {
//     console.error("Error fetching services from Render API:", error);
//     res.status(500).json({ error: "Failed to fetch services" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// import express from 'express';
// import renderApi from '@api/render-api';

// const app = express();
// const PORT = process.env.PORT || 3000;

// // אימות מול Render API
// renderApi.auth('rnd_Tbh8fS2S0sMDwG6ESa4UdquGvRwK');

// app.get('/', async (req, res) => {
//   try {
//     const { data } = await renderApi.listServices({ includePreviews: 'true', limit: '20' });
//     res.json(data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error fetching data from Render API');
//   }
// });

// // הפעלת השרת
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



import renderApi from '@api/render-api';

renderApi.auth('rnd_jAtpseriLSvEa0zJFp7pgwwjnNUE');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));