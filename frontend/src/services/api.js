import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';  // Change to your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add token automatically to headers if present
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
