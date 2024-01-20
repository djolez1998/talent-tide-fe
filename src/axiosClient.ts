// axios.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Replace with your API base URL
  // You can add other default configurations here
  // For example:
  // headers: {
  //   'Authorization': `Bearer ${localStorage.getItem('token')}`,
  //   'Content-Type': 'application/json',
  // },
});

export default axiosInstance;
