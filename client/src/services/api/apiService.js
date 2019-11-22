
import axios from 'axios';
// import initialConfig, { handleInterceptorsResponse, handleInterceptorsError } from './initialConfig';

// const apiService = axios.create({ ...initialConfig, baseURL: process.env.REACT_APP_API });
//
// apiService.interceptors.response.use(
//   handleInterceptorsResponse,
//   handleInterceptorsError,
// );
const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

const BASE_URL =  "http://localhost:5000";

const apiService = axios.create({ baseURL:BASE_URL  });

export default apiService;
