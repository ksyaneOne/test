import apiService from '../services/api/apiService';

const onAuthorization = async data => {
  apiService({
    method: 'post',
    url: '/customers/login',
    data
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
export default onAuthorization;
