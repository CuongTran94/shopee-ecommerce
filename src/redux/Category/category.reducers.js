import categoryTypes from './category.types';

const initState = {
  categories: [
    {
      c_name: '',
      c_order: 0,
      c_parentID: '',
      c_slug: ''
    }
  ]
};

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case categoryTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories
      };
    default:
      return state;
  }
};

export default categoryReducer;
