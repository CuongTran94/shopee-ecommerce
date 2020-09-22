import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import {
  fetchPostsSuccess,
  setMainPost,
  setSubPost,
  setListPost,
  fetchPostDetailSuccess,
  fetchPostsFirstLoad,
  fetchPostsFirstLoadSuccess,
  setVisible,
  setLoading,
  setError
} from './blog.actions';
import {
  fetchPostsService,
  fetchPostDetailService,
  fetchPostFirstLoadService,
  retrieveMore
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

export function* handleFetchPostsFirstLoad() {
  const post = yield call(fetchPostFirstLoadService);
  const { documentData, lastVisible } = post;
  yield put(fetchPostsFirstLoadSuccess(documentData));
  yield put(setVisible(lastVisible));
}

export function* watchFetchPostFirstLoad() {
  yield takeLatest(blogTypes.FETCH_POSTS_FIRST_LOAD, handleFetchPostsFirstLoad);
}

export function* handleFetchPostsLoadMore(action) {
  const { lastId } = action;
  try {
    const post = yield call(() => retrieveMore(lastId));
    const { documentData, lastVisible } = post;

    yield put(fetchPostsFirstLoadSuccess(documentData));
    yield put(setVisible(lastVisible));
  } catch (error) {
    yield put(setError(true));
  }
}

export function* watchFetchPostsLoadMore() {
  yield takeLatest(blogTypes.FETCH_POSTS_LOAD_MORE, handleFetchPostsLoadMore);
}

export default function* blogSagas() {
  yield all([
    call(watchFetchPosts),
    call(watchFetchPostDetail),
    call(watchFetchPostFirstLoad),
    call(watchFetchPostsLoadMore)
  ]);
}
