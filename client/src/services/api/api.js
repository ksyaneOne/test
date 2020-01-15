import axios from "axios";

const API = {
  product: {
    fetchProductsAll: async () => {
      return axios
        .get("/products")
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
      console.log(query, "axios query");
      return axios

        .get(`/products/filter?${query}`)
        .then(products => {
          return products.data;
        })
        .catch(err => {
          return err;
        });
    },

    fetchProductsBySearchPhrases: async phrases => {
      const searchPhrases = {
        query: phrases,
      };
      return axios
        .post("/products/search", searchPhrases)
        .then(products => {
          return products.data;
        })
        .catch(err => {
          return err;
        });
    },
    fetchMoreProducts: async (limit, lastProduct) => {
      const searchPhrases = {
        limitValue: `${limit}`,
        lastSeen: `${lastProduct}`,
      };
      return axios
        .post("/products/limited", searchPhrases)
        .then(products => {
          return products.data;
        })
        .catch(err => {
          console.log(err);
          return err;
        });
    },
  },

  category: {
    fetchCategoriesApi: async () => {
      return axios
        .get("/catalog")
        .then(catalog => {
          return catalog.data;
        })
        .catch(err => {
          return err;
        });
    },
  },
};

export default API;
