import orderTypes from './order.types';

const initState = {
  orderUser: {
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
  },
  orderManagements: []
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case orderTypes.SET_ORDER: {
      return {
        ...state,
        orderUser: action.order
      };
    }
    case orderTypes.SET_ORDERS_MANAGEMENT:
      return {
        ...state,
        orderManagements: action.orders
      };
    case orderTypes.ADD_PRODUCTS_TO_ORDER: {
      return {
        ...state,
        orderUser: {
          products: action.products,
          userID: action.userID,
          status: 1,
          payment_method: 'cod'
        }
      };
    }
    case orderTypes.FETCH_ORDER_DETAIL_SUCCESS: {
      return {
        ...state,
        orderDetail: action.newOrder
      };
    }
    case orderTypes.ADD_INFOR_ORDER: {
      return {
        ...state,
        orderUser: {
          ...state.orderUser,
          ...action.orderInfo
        },
        orderManagements: []
      };
    }
    case orderTypes.SET_PAYMENT_METHOD: {
      return {
        ...state,
        orderUser: {
          ...state.orderUser,
          ...action.paymentMethod
        },
        orderManagements: []
      };
    }
    case orderTypes.CHECK_OUT_SUCCESS: {
      return {
        ...state,
        orderUser: {
          ...state.orderUser,
          ...action.status
        },
        orderManagements: []
      };
    }
    default:
      return state;
  }
};

export default orderReducer;
