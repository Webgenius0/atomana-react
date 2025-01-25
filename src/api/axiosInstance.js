import axios from 'axios';

const API_URL = 'https://your-backend-api.com/api'; // Replace with your API endpoint

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
