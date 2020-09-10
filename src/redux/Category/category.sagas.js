import { takeLatest, all, call, put } from 'redux-saga/effects';

import { fetchCategories } from '../../services/category';
import categoryTypes from './category.types';
import {
  fetchCategoriesSuccess,
  fetchCategoriesPending,
  fetchCategoriesFailure
} from './category.actions';

function* handleFetchCategories() {
  yield put(fetchCategoriesPending());
  try {
    const categories = yield call(fetchCategories);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailure());
  }
}

function* watchFetchCategories() {
  yield takeLatest(categoryTypes.FETCH_CATEGORIES, handleFetchCategories);
}

export default function* reducerSagas() {
  yield all([call(watchFetchCategories)]);
}
