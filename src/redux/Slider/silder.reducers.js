import sliderTypes from './slider.types';

const initState = {
  sliders: [
    {
      order: 0,
      title: '',
      image: '',
    
    }
  ]
};

const sliderReducer = (state = initState, action) => {
  switch (action.type) {
    case sliderTypes.FETCH_SLIDER_SUCCESS:
      return {
        ...state,
        sliders: action.sliders
      };
    default:
      return state;
  }
};

export default sliderReducer;
