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
        pro_id,
        pro_name,
        pro_price,
        pro_avatar,
        pro_quantity,
        userID,
      } = action.cart;

      const product = {
        pro_id,
        pro_name,
        pro_price,
        pro_avatar,
        pro_quantity,
      };

      const check = containsObject(pro_id, state.products);

      if (!check) {
        return {
          products: [...state.products, product],
          userID: userID,
        };
      }
      const stateClone = { ...state };
      const productsClone = stateClone.products;
      let productFind = productsClone.find(
        (product) => product.pro_id === pro_id
      );
      productFind.pro_quantity += pro_quantity;
      return stateClone;
    }
    case cartTypes.DELETE_ITEM_CART: {
      const { id } = action;
      const stateClone = { ...state };
      const { products } = stateClone;
      const newProducts = products.filter((product) => product.pro_id !== id);
      stateClone.products = newProducts;
      console.log(stateClone);
      return stateClone;
    }
    default:
      return state;
  }
};

export default cartReducer;
