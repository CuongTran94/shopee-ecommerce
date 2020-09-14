import productTypes from './products.types';

export const setProducts = products => {
  return {
    type: productTypes.SET_PRODUCTS,
    payload: products
  };
};

export const fetchProducts = () => {
  return {
    type: productTypes.FETCH_PRODUCTS
  };
};

export const fetchDetailProduct = slug => {
  return {
    type: productTypes.FETCH_DETAIL_PRODUCT,
    payload: { slug }
  };
};

export const setProductDetail = product => {
  return {
    type: productTypes.SET_DETAIL_PRODUCT,
    payload: product
  };
};

export const fetchTotalProduct = () => {
  return {
    type: productTypes.FETCH_PRODUCT_TOTAL
  };
};

export const setTotalProducts = total => {
  return {
    type: productTypes.SET_PRODUCT_TOTAL,
    payload: total
  };
};

export const fetchPaginateProducts = (snapshot, page, limit) => {
  return {
    type: productTypes.FETCH_PAGINATE_PRODUCT,
    payload: { snapshot, page, limit }
  };
};

export const setLoadingProduct = flag => {
  return {
    type: productTypes.SET_LOADING,
    payload: flag
  };
};

export const searchProduct = name => {
  return {
    type: productTypes.SEARCH_PRODUCT,
    name
  };
};

export const fetchProductsByCates = categoryIds => {
  return {
    type: productTypes.FETCH_PRODUCTS_BY_CATEGORIES,
    categoryIds
  };
};

export const fetchProductsByCatesSuccess = (products = []) => {
  return {
    type: productTypes.FETCH_PRODUCTS_BY_CATEGORIES_SUCCESS,
    products
  };
};

export const cleanProductsCategory = ()=> {
  return {
    type: productTypes.CLEAN_PRODUCTS_CATEGORY
  }
}