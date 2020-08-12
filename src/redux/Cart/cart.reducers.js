import cartTypes from "./cart.types";
import { act } from "@testing-library/react";
import { containsObject } from "../../utils/cart";

const initState = {
  products: [
    {
      pro_id: null,
      pro_name: null,
      pro_avatar: null,
      pro_price: null,
      pro_quantity: null,
    },
  ],
  userID: null,
};

const cartReducer = (state = { products: [], userID: null }, action) => {
  switch (action.type) {
    case cartTypes.SET_CART: {
      return action.cart;
    }
    case cartTypes.ADD_TO_CART: {
      const {
        id,
        pro_name,
        pro_price,
        pro_avatar,
        quantity,
        userID,
      } = action.cart;

      const product = {
        id,
        pro_name,
        pro_price,
        pro_avatar,
        quantity,
      };
      
      const check = containsObject(action.cart.id, state.products);
      if (!check) {
        return {
          products: [...state.products, product],
          userID: userID,
        };
      }
      const stateClone = { ...state };
      const productsClone = stateClone.products;
      let productFind = productsClone.find((x) => x.id === action.cart.id);
      productFind.quantity += 1;
      return stateClone;
    }
    default:
      return state;
  }
};

export default cartReducer;
