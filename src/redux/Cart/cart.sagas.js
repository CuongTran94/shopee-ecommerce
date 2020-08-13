import { takeLatest, all, call, put, select } from "redux-saga/effects";
import { setCart } from "./cart.actions";
import cartTypes from "./cart.types";
import {
  fetchCartByUserID,
  addToCartFirebase,
  updateCartFirebase,
} from "../../services/carts";
import { emptyObject } from "../../utils/cart";

export const getCurrentUser = (state) => state.currentUser;

export function* fetchCart(action) {
  try {
    const { userID } = action;
    let cart = yield call(fetchCartByUserID, userID);
    if (emptyObject(cart))
      cart = { products: [], userID: null };
    yield put(setCart(cart));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchCart() {
  yield takeLatest(cartTypes.FETCH_CART, fetchCart);
}

export function* handleAddToCart(action) {
  const { cart } = action;
  try {
    const cartFromState = yield select((state) => state.cart);
    const cartFromServer = yield call(fetchCartByUserID, cart.userID);
    if (emptyObject(cartFromServer)) {
      yield call(addToCartFirebase, cartFromState);
    } else {
      yield call(() => updateCartFirebase(cartFromState, cartFromServer.id));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchAddToCart() {
  yield takeLatest(cartTypes.ADD_TO_CART, handleAddToCart);
}

export default function* cartSagas() {
  yield all([call(watchFetchCart), call(watchAddToCart)]);
}
