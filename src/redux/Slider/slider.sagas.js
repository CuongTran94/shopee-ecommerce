import { takeLatest, all, call, put } from 'redux-saga/effects';

import { fetchSilders } from '../../services/slider';
import slidersTypes from './slider.types';
import {
  fetchSlidersPending,
  fetchSlidersSuccess,
  fetchSlidersFailure
} from './slider.actions';

function* handleFetchSlider() {
  yield put(fetchSlidersPending());
  try {
    const sliders = yield call(fetchSilders);

    yield put(fetchSlidersSuccess(sliders));
  } catch (error) {
    yield put(fetchSlidersFailure());
  }
}

function* watchFetchSliders() {
  yield takeLatest(slidersTypes.FETCH_SLIDER, handleFetchSlider);
}

export default function* reducerSagas() {
  yield all([call(watchFetchSliders)]);
}
