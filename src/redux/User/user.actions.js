// Here we have our action creator
import userTypes from './user.types';

export const setCurrentUser = user => {
  return {
    type: userTypes.SET_CURRENT_USER,
    payload: user
  };
};

export const clearCurrentUser = () => {
  return {
    type: userTypes.CLEAR_CURRENT_USER
  };
};

export const checkUserLogin = () => {
  return {
    type: userTypes.CHECK_USER_LOGIN
  };
};

export const loginUser = user => {
  return {
    type: userTypes.LOGIN_USER,
    payload: user
  };
};

export const loginFailed = error => {
  return {
    type: userTypes.LOGIN_FAILED,
    payload: error
  };
};

export const logoutUser = () => {
  return {
    type: userTypes.LOGOUT_USER
  };
};

export const signUpUser = user => {
  return {
    type: userTypes.SIGN_UP_USER,
    payload: user
  };
};

export const signUpFail = error => {
  return {
    type: userTypes.SIGN_UP_FAILED,
    payload: error
  };
};

export const setLoading = () => {
  return {
    type: userTypes.SET_LOADING_BTN
  };
};

export const setAuthError = () => {
  return {
    type: userTypes.SET_AUTH_ERROR
  };
};

export const changePassword = (newPassword, currentPassword) => {
  return {
    type: userTypes.CHANGE_PASSWORD,
    newPassword,
    currentPassword
  };
};

export const changePasswordPending = () => {
  return {
    type: userTypes.CHANGE_PASSWORD_PENDING
  };
};

export const changePasswordSuccess = () => {
  return {
    type: userTypes.CHANGE_PASSWORD_SUCCESS
  };
};

export const changePasswordFailure = error => {
  return {
    type: userTypes.CHANGE_PASSWORD_FAILURE,
    error
  };
};
