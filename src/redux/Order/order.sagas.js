import { takeLatest, all, call, put, select } from 'redux-saga/effects';

import orderTypes from './order.types';
import { emptyObject } from '../../utils/cart';
import { fetchOrderByUserID } from '../../services/carts';

import {
  setOrder,
  setOrderManagement,
  fetchOrderDetail,
  fetchOrderDetailPending,
  fetchOrderDetailSuccess,
  fetchOrderDetailFailure
} from './order.actions';

import {
  updateOrderFirebase,
  addToOrderFirebase,
  fetchOrderManagement,
  handleFetchOrderDetailByID
} from '../../services/orders';

export function* handleFetchOrder(action) {
  const { userID } = action;
  for (let i = 0; i < 2; i++) {
    try {
      const order = yield call(fetchOrderByUserID, userID);
      yield put(setOrder(order));
    } catch (error) {
      console.log(error);
    }
  }
}

export function* watchFecthOrder() {
  yield takeLatest(orderTypes.FETCH_ORDER, handleFetchOrder);
}

export function* handleUpdateInfor() {
  const order = yield select(state => state.order.orderUser);

  try {
    const orderFromServer = yield call(fetchOrderByUserID, order.userID);
    yield call(() => updateOrderFirebase(order, orderFromServer.id));
  } catch (error) {
    console.log(error);
  }
}

export function* watchUpdateInfor() {
  yield takeLatest(orderTypes.ADD_INFOR_ORDER, handleUpdateInfor);
}

export function* handleUpdatePaymentMethod() {
  const order = yield select(state => state.order.orderUser);

  try {
    const orderFromServer = yield call(fetchOrderByUserID, order.userID);
    yield call(() => updateOrderFirebase(order, orderFromServer.id));
  } catch (error) {
    console.log(error);
  }
}

export function* watchUpdatePaymentMethod() {
  yield takeLatest(orderTypes.SET_PAYMENT_METHOD, handleUpdatePaymentMethod);
}

export function* handleCheckoutSuccess() {
  const order = yield select(state => state.order.orderUser);

  try {
    const orderFromServer = yield call(fetchOrderByUserID, order.userID);
    yield call(() => updateOrderFirebase(order, orderFromServer.id));
  } catch (error) {
    console.log(error);
  }
}

export function* watchCheckoutSuccess() {
  yield takeLatest(orderTypes.CHECK_OUT_SUCCESS, handleCheckoutSuccess);
}

export function* handleAddToOrder(action) {
  try {
    const orderFromState = yield select(state => state.order.orderUser);
    const orderFromServer = yield call(fetchOrderByUserID, action.userID);

    if (emptyObject(orderFromServer)) {
      yield call(addToOrderFirebase, orderFromState);
    } else {
      yield call(() => updateOrderFirebase(orderFromState, orderFromServer.id));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchAddToOrder() {
  yield takeLatest(orderTypes.ADD_PRODUCTS_TO_ORDER, handleAddToOrder);
}

export function* handleSetOrderManagement(action) {
  const { userID } = action;

  try {
    const orders = yield call(fetchOrderManagement, userID);
    yield put(setOrderManagement(orders));
  } catch (err) {
    console.log(err);
  }
}

export function* watchFecthOrderManagement() {
  yield takeLatest(
    orderTypes.FETCH_ORDERS_MANAGEMENT,
    handleSetOrderManagement
  );
}

export function* handleFetchOrderDetail(action) {
  const { orderID } = action;
  yield put(fetchOrderDetailPending());

  try {
    const order = yield call(() => handleFetchOrderDetailByID(orderID));
  
    yield put(fetchOrderDetailSuccess(order));
  } catch (error) {
    yield put(fetchOrderDetailFailure(error));
  }
}

export function* watchFetchOrderDetail() {
  yield takeLatest(orderTypes.FETCH_ORDER_DETAIL, handleFetchOrderDetail);
}

export default function* orderSaga() {
  yield all([
    call(watchFecthOrder),
    call(watchUpdateInfor),
    call(watchUpdatePaymentMethod),
    call(watchCheckoutSuccess),
    call(watchAddToOrder),
    call(watchFecthOrderManagement),
    call(watchFetchOrderDetail)
  ]);
}
