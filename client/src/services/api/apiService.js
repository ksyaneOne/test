import axios from 'axios';
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode';

const BASE_URL =  "http://localhost:5000";

// import initialConfig, { handleInterceptorsResponse, handleInterceptorsError } from './initialConfig';

// const apiService = axios.create({ ...initialConfig, baseURL: process.env.REACT_APP_API });
//
// apiService.interceptors.response.use(
//   handleInterceptorsResponse,
//   handleInterceptorsError,
// );
const apiService = () => {
  let authorizationToken = null;
  if (Cookies.get('token') && jwtDecode(Cookies.get('token')).exp) {
    authorizationToken = Cookies.get('token');
  }

  return  axios.create({
    baseURL: BASE_URL,
    headers: { 'Authorization': authorizationToken }
  });
};
export default apiService;
