import { takeLatest, all, call, put, select } from "redux-saga/effects";
import { setCart } from "./cart.actions";
import cartTypes from "./cart.types";
import { fetchCartByUserID } from "../../services/carts";

export const getCurrentUser = (state) => state.currentUser;

export function* fetchCart(action) {
  try {
    const { userID } = action;
    const cart = yield call(fetchCartByUserID, userID);

    yield put(setCart(cart));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchCart() {
  yield takeLatest(cartTypes.FETCH_CART, fetchCart);
}

export default function* cartSagas() {
  yield all([call(watchFetchCart)]);
}
