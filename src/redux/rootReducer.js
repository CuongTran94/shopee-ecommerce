import { combineReducers } from 'redux';
import userReducer from './User/user.reducer';
import productReducer from './Products/products.reducer';
import cartReducer from './Cart/cart.reducers';
import orderReducer from './Order/order.reducers';
import categoryReducer from './Category/category.reducers';

export default combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
  category: categoryReducer
});
