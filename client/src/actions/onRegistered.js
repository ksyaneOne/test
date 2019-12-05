import apiService from '../services/api/apiService';


const onRegistered =  (data) => {
  return  apiService()({
    method: 'post',
    url: '/customers',
    headers: { 'Content-Type': 'application/json' },
    data
  })
    .then(savedCustomer => console.log(savedCustomer))
    .catch(err => {
    return err;})
};
export default onRegistered;
