import { takeLatest, all, call, put, takeEvery } from 'redux-saga/effects';
import {
  setProducts,
  setTotalProducts,
  setLoadingProduct,
  setProductDetail,
  searchProduct
} from './products.actions';
import productTypes from './products.types';
import {
  handleFetchProduct,
  getTotalProduct,
  handlePaginateProduct,
  handleFetchDetailProduct,
  handleSearchProductByName
} from '../../services/products';

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

export function* handleSearchProduct({ name }) {

  try {
    const filterProducts = yield handleSearchProductByName(name);

    yield put(setProducts(filterProducts));
  } catch (error) {
    console.log(error);
  }
}

export function* onSearchProducts() {
  yield takeLatest(productTypes.SEARCH_PRODUCT, handleSearchProduct);
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
      limit
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
    call(onSearchProducts)
  ]);
}
