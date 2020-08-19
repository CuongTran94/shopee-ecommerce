import productTypes from './products.types';

const initialState = {
  listProducts: [],
  detailProduct: null,
  total: 0,
  isLoading: true
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productTypes.SET_PRODUCTS:
      return {
        ...state,
        detailProduct: null,
        listProducts: action.payload
      };
    case productTypes.SET_DETAIL_PRODUCT:
      return {
        ...state,
        listProducts: [],
        detailProduct: action.payload
      };
    case productTypes.SET_PRODUCT_TOTAL:
      return {
        ...state,
        total: action.payload
      };
    case productTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;
