import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import {
  fetchPostsSuccess,
  setMainPost,
  setSubPost,
  setListPost,
  fetchPostDetailSuccess,
  fetchPostDetail
} from './blog.actions';
import {
  fetchPostsService,
  fetchPostDetailService
} from '../../services/blogs';
import blogTypes from './blog.types';

export function* handleFetchPosts() {
  try {
    const posts = yield call(() => fetchPostsService('blogs'));
    yield put(fetchPostsSuccess(posts));
    yield put(setMainPost(posts));
    yield put(setSubPost(posts));
    yield put(setListPost(posts));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchPosts() {
  yield takeLatest(blogTypes.FETCH_POSTS, handleFetchPosts);
}

export function* handleFetchPostDetail(action) {
  const { slug } = action;
  const post = yield call(() => fetchPostDetailService('blogs', slug));
  yield put(fetchPostDetailSuccess(post));
}

export function* watchFetchPostDetail() {
  yield takeLatest(blogTypes.FETCH_POST_DETAIL, handleFetchPostDetail);
}

export default function* blogSagas() {
  yield all([call(watchFetchPosts), call(watchFetchPostDetail)]);
}
