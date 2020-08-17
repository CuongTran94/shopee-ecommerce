import orderTypes from './order.types';

const initState = {
  id: '',
  address: '',
  city: '',
  email: '',
  gender: 1,
  name: '',
  note: '',
  phone_number: '',
  status: 0,
  shipping: 1,
  products: [],
  userID: ''
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case orderTypes.SET_ORDER: {
      return action.order;
    }
    case orderTypes.ADD_PRODUCTS_TO_ORDER: {
      return {
        products: action.products,
        userID: action.userID,
        status: 1,
        payment_method: 'cod'
      };
    }
    case orderTypes.ADD_INFOR_ORDER: {
      return {
        ...state,
        ...action.orderInfo
      };
    }
    case orderTypes.SET_PAYMENT_METHOD: {
      return {
        ...state,
        ...action.paymentMethod
      };
    }
    case orderTypes.CHECK_OUT_SUCCESS: {
      return {
        ...state,
        ...action.status
      };
    }
    default:
      return state;
  }
};

export default orderReducer;
