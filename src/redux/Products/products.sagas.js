import {
  setProducts,
  setTotalProducts,
  setLoadingProduct,
  setProductDetail,
} from "./products.actions";
import productTypes from "./products.types";
import {
  handleFetchProduct,
  getTotalProduct,
  handlePaginateProduct,
  handleFetchDetailProduct,
} from "../../services/products";
import { takeLatest, all, call, put } from "redux-saga/effects";

export function* getProducts() {
  try {
    const listProduct = yield handleFetchProduct();
    yield put(setProducts(listProduct));
    yield put(setLoadingProduct(false));
  } catch (err) {
    console.log(err);
  }
}

export function* onFetchProducts() {
  yield takeLatest(productTypes.FETCH_PRODUCTS, getProducts);
}

export function* getTotal() {
  try {
    const total = yield getTotalProduct();
    yield put(setTotalProducts(total));
  } catch (err) {
    console.log(err);
  }
}

export function* onSetTotalProduct() {
  yield takeLatest(productTypes.FETCH_PRODUCT_TOTAL, getTotal);
}

export function* fetchPaginateProduct({ payload: { snapshot, page, limit } }) {
  try {
    const products = yield call(handlePaginateProduct, {
      snapshot,
      page,
      limit,
    });
    yield put(setProducts(products));
    yield put(setLoadingProduct(false));
  } catch (err) {
    console.log(err);
  }
}

export function* onFetchPaginateProduct() {
  yield takeLatest(productTypes.FETCH_PAGINATE_PRODUCT, fetchPaginateProduct);
}

export function* fetchProductDetail({ payload: { slug } }) {
  try {
    const product = yield call(handleFetchDetailProduct, slug);
    yield put(setProductDetail(product));
  } catch (err) {
    console.log(err);
  }
}

export function* onFetchProductDetail() {
  yield takeLatest(productTypes.FETCH_DETAIL_PRODUCT, fetchProductDetail);
}

export default function* productSagas() {
  yield all([
    call(onFetchProducts),
    call(onSetTotalProduct),
    call(onFetchPaginateProduct),
    call(onFetchProductDetail),
  ]);
}
