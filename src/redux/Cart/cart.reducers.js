import cartTypes from './cart.types';
import { containsObject } from '../../utils/cart';

const initState = {
  products: [
    {
      pro_id: null,
      pro_name: null,
      pro_avatar: null,
      pro_price: null,
      pro_quantity: null
    }
  ],
  userID: null
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
        pro_inventory,
        userID
      } = action.cart;

      const product = {
        pro_id,
        pro_name,
        pro_price,
        pro_avatar,
        pro_quantity,
        pro_inventory
      };

      const check = containsObject(pro_id, state.products);

      if (!check) {
        return {
          products: [...state.products, product],
          userID
        };
      }
      const stateClone = { ...state };
      const productsClone = stateClone.products;
      const productFind = productsClone.find(
        productClone => productClone.pro_id === pro_id
      );
      productFind.pro_quantity += pro_quantity;
      return stateClone;
    }
    case cartTypes.DELETE_ITEM_CART: {
      const { id } = action;
      const stateClone = { ...state };
      const { products } = stateClone;
      const newProducts = products.filter(product => product.pro_id !== id);
      stateClone.products = newProducts;
      return stateClone;
    }
    case cartTypes.DECREASE_ITEM_QUANTITY: {
      const { id } = action;
      const stateClone = { ...state };
      const { products } = stateClone;
      const newProduct = products.find(product => product.pro_id === id);
      newProduct.pro_quantity -= 1;
      return stateClone;
    }
    case cartTypes.INCREASE_ITEM_QUANTITY: {
      const { id } = action;
      const stateClone = { ...state };
      const { products } = stateClone;
      const newProduct = products.find(product => product.pro_id === id);
      newProduct.pro_quantity += 1;
      return stateClone;
    }
    case cartTypes.CHANGE_ITEM_QUANTITY: {
      const { id, pro_quantity } = action;
      const stateClone = { ...state };
      const { products } = stateClone;
      const newProduct = products.find(product => product.pro_id === id);
      newProduct.pro_quantity = pro_quantity;
      return stateClone;
    }
    default:
      return state;
  }
};

export default cartReducer;
