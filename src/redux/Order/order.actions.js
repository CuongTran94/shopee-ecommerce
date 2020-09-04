import orderTypes from './order.types';

export const fetchOrder = userID => {
  return {
    type: orderTypes.FETCH_ORDER,
    userID
  };
};

export const setOrder = order => {
  return {
    type: orderTypes.SET_ORDER,
    order
  };
};

export const addInforToOrder = orderInfo => {
  return {
    type: orderTypes.ADD_INFOR_ORDER,
    orderInfo
  };
};

export const setPaymentMethod = paymentMethod => {
  return {
    type: orderTypes.SET_PAYMENT_METHOD,
    paymentMethod
  };
};

export const setCheckoutSuccess = status => {
  return {
    type: orderTypes.CHECK_OUT_SUCCESS,
    status
  };
};

export const addProductsToOrder = (products, userID) => {
  return {
    type: orderTypes.ADD_PRODUCTS_TO_ORDER,
    products,
    userID
  };
};

export const fetchOrderManagement = userID => {
  return {
    type: orderTypes.FETCH_ORDERS_MANAGEMENT,
    userID
  };
};

export const setOrderManagement = orders => {
  return {
    type: orderTypes.SET_ORDERS_MANAGEMENT,
    orders
  };
};

export const fetchOrderDetail = orderID => {
  return {
    type: orderTypes.FETCH_ORDER_DETAIL,
    orderID
  };
};

export const fetchOrderDetailPending = () => {
  return {
    type: orderTypes.FETCH_ORDER_DETAIL_PENDING
  };
};

export const fetchOrderDetailSuccess = newOrder => {
  console.log('neworder', newOrder);
  return {
    type: orderTypes.FETCH_ORDER_DETAIL_SUCCESS,
    newOrder
  };
};

export const fetchOrderDetailFailure = error => {
  return {
    type: orderTypes.FETCH_ORDER_DETAIL_FAILURE,
    error
  };
};
