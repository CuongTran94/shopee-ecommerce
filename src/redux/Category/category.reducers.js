import categoryTypes from './category.types';

const initState = {
  categories: [
    {
      c_name: '',
      c_order: 0,
      c_parentID: '',
      c_slug: '',
      c_image: ''
    }
  ],
  mainCategories: [
    {
      c_name: '',
      c_order: 0,
      c_parentID: '',
      c_slug: '',
      c_image: ''
    }
  ],
  currentCategory: ''
};

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case categoryTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories,
        mainCategories: action.categories.filter(
          cate => cate.c_parentId === 'root'
        ),
        currentCategory: ''
      };
    case categoryTypes.SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.categoryID
      };
    default:
      return state;
  }
};

export default categoryReducer;
