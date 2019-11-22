import apiService from '../services/api/apiService';

const onRegistered = async data => {
  await apiService({
    method: 'post',
    url: '/customers',
    headers: { 'Content-Type': 'application/json' },
    data
  })
    .then(savedCustomer => console.log(savedCustomer))
    .catch(err => console.log(err));
};
export default onRegistered;
