import axios from 'axios';

const API = {
  product: {
    fetchProductsAll: async () => {
      return axios
        .get('/products')
        .then(products => {
          return products.data;
        })
        .catch(err => {
          return err;
        });
    },

    fetchProductById: async id => {
      return axios
        .get(`/products/${id}/`)
        .then(products => {
          return products.data;
        })
        .catch(err => {
          return err;
        });
    },

    fetchProductsByFilterQuery: async query => {
      return axios
        .get(`/products/filter?${query}/`)
        .then(products => {
          return products.data;
        })
        .catch(err => {
          return err;
        });
    },

    fetchProductsBySearchPhrases: async phrases => {
      const searchPhrases = {
        query: phrases
      };
      console.log(searchPhrases, 'searchPhrases');
      return axios
        .post('/products/search', searchPhrases)
        .then(products => {
          console.log(products);
          return products.data;
        })
        .catch(err => {
          return err;
        });
    }
  },

  category: {
    fetchCategoriesApi: async () => {
      return axios
        .get('/catalog')
        .then(catalog => {
          return catalog.data;
        })
        .catch(err => {
          return err;
        });
    }
  }
};

export default API;
