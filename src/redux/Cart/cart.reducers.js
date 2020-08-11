import cartTypes from "./cart.types";

const initState = {
  products: [
    {
      pro_id: undefined,
      pro_name: undefined,
      pro_avatar: undefined,
      pro_price: undefined,
      pro_quantity: undefined,
    },
  ],
  userID: undefined,
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case cartTypes.SET_CART: {
      
      return action.cart;
    }
    default:
      return state;
  }
};

export default cartReducer;
