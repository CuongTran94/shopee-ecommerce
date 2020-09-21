import blogTypes from './blog.types';

export const fetchPosts = () => {
  return {
    type: blogTypes.FETCH_POSTS
  };
};

export const fetchPostsSuccess = posts => {
  return {
    type: blogTypes.FETCH_POSTS_SUCCESS,
    posts
  };
};

export const setMainPost = posts => {
  return {
    type: blogTypes.SET_MAIN_POST,
    posts
  };
};

export const setSubPost = posts => {
  return {
    type: blogTypes.SET_SUB_POSTS,
    posts
  };
};

export const setListPost = posts => {
  return {
    type: blogTypes.SET_LIST_POSTS,
    posts
  };
};

export const fetchPostDetail = slug => {
  return {
    type: blogTypes.FETCH_POST_DETAIL,
    slug
  };
};

export const fetchPostDetailSuccess = post => {
  return {
    type: blogTypes.FETCH_POST_DETAIL_SUCCESS,
    post
  };
};
