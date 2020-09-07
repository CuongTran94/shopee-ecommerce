import cartTypes from './cart.types';

export const fetchCart = userID => {
  return {
    type: cartTypes.FETCH_CART,
    userID
  };
};

export const setCart = cart => {
  return {
    type: cartTypes.SET_CART,
    cart
  };
};

export const addToCart = cart => {
  return {
    type: cartTypes.ADD_TO_CART,
    cart
  };
};

export const deleteItem = id => {
  return {
    type: cartTypes.DELETE_ITEM_CART,
    id
  };
};

export const deleteCart = cartID => {
  return {
    type: cartTypes.DELETE_CART,
    cartID
  };
};

export const deleteCartSuccess = () => {
  return {
    type: cartTypes.DELETE_CART_SUCCESS
  };
};

export const increaseQuantity = id => {
  return {
    type: cartTypes.INCREASE_ITEM_QUANTITY,
    id
  };
};

export const decreaseQuantity = id => {
  return {
    type: cartTypes.DECREASE_ITEM_QUANTITY,
    id
  };
};

export const handleQuantity = (id, pro_quantity) => {
  return {
    type: cartTypes.CHANGE_ITEM_QUANTITY,
    id,
    pro_quantity
  };
};
