import userTypes from './user.types';

const initialState = {
  currentUser: null,
  authErr: null,
  isLoading: false,
  error: '',
  success: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        authErr: null,
        currentUser: action.payload
      };
    case userTypes.CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: null
      };
    case userTypes.LOGIN_FAILED:
      return {
        ...state,
        authErr: 'Login failed'
      };
    case userTypes.SIGN_UP_FAILED:
      return {
        ...state,
        authErr: action.payload.message
      };
    case userTypes.SET_LOADING_BTN:
      return {
        ...state,
        isLoading: !state.isLoading
      };
    case userTypes.SET_AUTH_ERROR:
      return {
        ...state,
        authErr: null
      };
    case userTypes.CHANGE_PASSWORD_PENDING:
      return {
        ...state,
        isLoading: true,
        error: '',
        success: false
      };
    case userTypes.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        success: true
      };
    case userTypes.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        success: false
      };
    default:
      return state;
  }
};

export default userReducer;
