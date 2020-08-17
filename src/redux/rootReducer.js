import { combineReducers } from 'redux';
import userReducer from './User/user.reducer';
import productReducer from './Products/products.reducer';
import cartReducer from './Cart/cart.reducers';
import orderReducer from './Order/order.reducers';

export default combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
  order: orderReducer
});
