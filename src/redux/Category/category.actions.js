import categoryTypes from './category.types';

export const fetchCategories = () => {
  return {
    type: categoryTypes.FETCH_CATEGORIES
  };
};

export const fetchCategoriesPending = () => {
  return {
    type: categoryTypes.FETCH_CATEGORIES_PENDING
  };
};

export const fetchCategoriesSuccess = categories => {
  return {
    type: categoryTypes.FETCH_CATEGORIES_SUCCESS,
    categories
  };
};

export const fetchCategoriesFailure = () => {
  return {
    type: categoryTypes.FETCH_CATEGORIES_FAILURE
  };
};

export const setCurrentCategory = categoryID => {
  return {
    type: categoryTypes.SET_CURRENT_CATEGORY,
    categoryID
  };
};
