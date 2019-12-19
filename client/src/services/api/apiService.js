import axios from 'axios';
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode';


const apiService = () => {
  let authorizationToken = null;
  if (Cookies.get('token') && jwtDecode(Cookies.get('token')).exp) {
    authorizationToken = Cookies.get('token');

  }
  console.log(authorizationToken);
  return  axios.create({
    headers: { 'Authorization': authorizationToken }
  });
};
export default apiService;
