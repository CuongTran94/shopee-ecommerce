import cartTypes from "./cart.types";

export const fetchCart = (userID) => {
  return {
    type: cartTypes.FETCH_CART,
    userID,
  };
};

export const setCart = (cart) => {

  return {
    type: cartTypes.SET_CART,
    cart,
  };
};

export const addToCart = (id) => {
  return {
    type: cartTypes.ADD_TO_CART,
    id,
  };
};

export const deleteItem = (id) => {
  return {
    type: cartTypes.DELETE_ITEM_CART,
    payload: id,
  };
};

export const increaseQuantity = (id) => {
  return {
    type: cartTypes.INCREASE_ITEM_QUANTITY,
    payload: id,
  };
};

export const decreaseQuantity = (id) => {
  return {
    type: cartTypes.DECREASE_ITEM_QUANTITY,
    payload: id,
  };
};
