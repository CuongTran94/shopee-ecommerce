import blogTypes from './blog.types';

const initPost = {
  posts: [
    {
      title: '',
      slug: '',
      published: undefined,
      content: '',
      category: '',
      author: '',
      postStatus: true,
      coverImage: '',
      smallUrl: '',
      mediumUrl: '',
      largeUrl: ''
    }
  ],
  mainPost: {},
  subPosts: [],
  listPosts: [],
  postDetail: {},
  lastVisible: '',
  postsInfinite: [],
  error: false
};
const postReducers = (state = initPost, action) => {
  switch (action.type) {
    case blogTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts
      };
    case blogTypes.SET_MAIN_POST:
      return {
        ...state,
        mainPost: action.posts[0]
      };
    case blogTypes.SET_SUB_POSTS:
      return {
        ...state,
        subPosts: action.posts.slice(1, 5)
      };
    case blogTypes.SET_LIST_POSTS:
      return {
        ...state,
        listPosts: action.posts.slice(5)
      };
    case blogTypes.FETCH_POST_DETAIL_SUCCESS:
      return {
        ...state,
        postDetail: action.post
      };
    case blogTypes.FETCH_POSTS_FIRST_LOAD_SUCCESS:
      return {
        ...state,
        postsInfinite: [...state.postsInfinite, ...action.posts]
      };
    case blogTypes.SET_LAST_VISIBLE:
      return {
        ...state,
        lastVisible: action.lastVisible
      };
    case blogTypes.SET_ERROR:
      return {
        ...state,
        error: action.status
      };
    default:
      return state;
  }
};

export default postReducers;
