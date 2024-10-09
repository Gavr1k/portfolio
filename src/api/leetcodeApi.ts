import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://leetcode-api-faisalshohag.vercel.app/gavr1kk',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
