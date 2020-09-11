import sliderTypes from './slider.types';

export const fetchSliders = () => {
  return {
    type: sliderTypes.FETCH_SLIDER
  };
};

export const fetchSlidersPending = () => {
  return {
    type: sliderTypes.FETCH_SLIDER_PENDING
  };
};

export const fetchSlidersSuccess = sliders => {
  return {
    type: sliderTypes.FETCH_SLIDER_SUCCESS,
    sliders
  };
};

export const fetchSlidersFailure = () => {
  return {
    type: sliderTypes.FETCH_SLIDER_FAILURE
  };
};
