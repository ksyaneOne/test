import Cookies from 'js-cookie'
import apiService from '../services/api/apiService';
import axios  from  'axios';

export const ADD_TO_BASKET = "SAVE_TO_BASKET";

export const addToBasket =  (id,count=1)=>{
  const product ={
    product: id,
    cartQuantity: count
  };
  const newCart = {
    products: [
      {product: "5dbdd6a78b18973b08aad001", cartQuantity: 1}
    ]
  };

  axios.get('/products/5dbdd57d8b18973b08aacfff')
    .then(newCart => {
      console.log(newCart);
    })
    .catch(err => {
      console.log(err);
    });

  let products = [];
  if(!Cookies.get('cartProducts')) {
    products.push(product);
    Cookies.set('cartProducts',products ,{ expires: 1 })
  }else {
    products =  Cookies.getJSON('cartProducts');
    products.push(product);
    Cookies.set('cartProducts',products ,{ expires: 1 })
  }
  return {type:ADD_TO_BASKET, payload:products};
};

