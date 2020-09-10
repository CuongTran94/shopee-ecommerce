import { all, call } from 'redux-saga/effects';
import userSagas from './User/user.sagas';
import productSagas from './Products/products.sagas';
import cartSaga from './Cart/cart.sagas';
import orderSaga from './Order/order.sagas';
import categorySaga from './Category/category.sagas';
import sliderSaga from './Slider/slider.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(productSagas),
    call(cartSaga),
    call(orderSaga),
    call(categorySaga),
    call(sliderSaga)
  ]);
}
