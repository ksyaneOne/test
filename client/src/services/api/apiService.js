import axios from 'axios';
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode';

const BASE_URL =  "http://localhost:5000";

const apiService = () => {
  let authorizationToken = null;
  if (Cookies.get('token') && jwtDecode(Cookies.get('token')).exp) {
    authorizationToken = Cookies.get('token');

  }
  console.log(authorizationToken);
  return  axios.create({
    baseURL: BASE_URL,
    headers: { 'Authorization': authorizationToken }
  });
};
export default apiService;
