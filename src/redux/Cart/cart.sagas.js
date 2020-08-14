import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import { setCart } from './cart.actions';
import cartTypes from './cart.types';
import {
  fetchCartByUserID,
  addToCartFirebase,
  updateCartFirebase
} from '../../services/carts';
import { emptyObject } from '../../utils/cart';

export const getCurrentUser = state => state.currentUser;

export function* fetchCart(action) {
  try {
    const { userID } = action;
    let cart = yield call(fetchCartByUserID, userID);
    if (emptyObject(cart)) cart = { products: [], userID: null };
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
    const cartFromState = yield select(state => state.cart);
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

export function* handleDeleteItem(action) {
  const cart = yield select(state => state.cart);
  const cartFromServer = yield call(fetchCartByUserID, cart.userID);
  try {
    yield call(() => updateCartFirebase(cart, cartFromServer.id));
  } catch (error) {
    console.log(error);
  }
}

export function* watchDeleteItem() {
  yield takeLatest(cartTypes.DELETE_ITEM_CART, handleDeleteItem);
}

export function* handleChangeQuantity() {
  const cart = yield select(state => state.cart);
  try {
    const cartFromServer = yield call(fetchCartByUserID, cart.userID);
    yield call(() => updateCartFirebase(cart, cartFromServer.id));
  } catch (error) {
    console.log(error);
  }
}

export function* watchDecreaseQuantity() {
  yield takeLatest(cartTypes.DECREASE_ITEM_QUANTITY, handleChangeQuantity);
}



export function* watchIncreaseQuantity() {
  yield takeLatest(cartTypes.INCREASE_ITEM_QUANTITY, handleChangeQuantity);
}

export function* watchHandleChangeQuantiy() {
  yield takeLatest(cartTypes.CHANGE_ITEM_QUANTITY, handleChangeQuantity);
}

export default function* cartSagas() {
  yield all([
    call(watchFetchCart),
    call(watchAddToCart),
    call(watchDeleteItem),
    call(watchDecreaseQuantity),
    call(watchIncreaseQuantity),
    call(watchHandleChangeQuantiy)
  ]);
}
