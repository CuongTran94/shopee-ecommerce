import { takeLatest, call, all, put, select } from 'redux-saga/effects';
import { auth } from '../../constants/config';
import {
  clearCurrentUser,
  setCurrentUser,
  loginFailed,
  setLoading,
  signUpFail,
  changePasswordPending,
  changePasswordSuccess,
  changePasswordFailure,
  updateUserInfoPending,
  updateUserInfoSuccess,
  updateUserInfoFailure
} from './user.actions';
import userTypes from './user.types';
import {
  signUp,
  signIn,
  getUserProfile,
  getCurrentUser,
  changePasswordFirebase,
  updateUserProfile
} from '../../services/user';

// Sign out user
export function* signOutUser() {
  try {
    yield auth.signOut();
    yield put(clearCurrentUser());
  } catch (err) {
    console.log(err);
  }
}

export function* onSignOutUser() {
  yield takeLatest(userTypes.LOGOUT_USER, signOutUser);
}

// Sign up user
export function* signUpUser({ payload: { username, email, password } }) {
  try {
    const userCreate = yield call(signUp, { email, password });
    const name = { username };
    const userRef = yield call(getUserProfile, {
      userAuth: userCreate,
      data: name
    });
    const userCurrent = yield userRef.get();
    yield put(
      setCurrentUser({
        id: userCurrent.id,
        ...userCurrent.data()
      })
    );
    yield put(setLoading());
  } catch (err) {
    yield put(signUpFail(err));
    yield put(setLoading());
  }
}

export function* onSignUpUser() {
  yield takeLatest(userTypes.SIGN_UP_USER, signUpUser);
}

// Sign in user
export function* signInUser({ payload: { email, password } }) {
  try {
    const userSignIn = yield call(signIn, { email, password });
    const userRef = yield call(getUserProfile, {
      userAuth: userSignIn,
      data: {}
    });
    const userCurrent = yield userRef.get();

    yield put(
      setCurrentUser({
        id: userCurrent.id,
        ...userCurrent.data()
      })
    );
    yield put(setLoading());
  } catch (err) {
    yield put(loginFailed(err));
    yield put(setLoading());
  }
}

export function* onSignInUser() {
  yield takeLatest(userTypes.LOGIN_USER, signInUser);
}

// get current user
export function* isUserAuth() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    const userRef = yield call(getUserProfile, { userAuth, data: {} });
    const userCurrent = yield userRef.get();
    yield put(
      setCurrentUser({
        id: userCurrent.id,
        ...userCurrent.data()
      })
    );
  } catch (err) {
    console.log(err);
  }
}

export function* onIsUserAuth() {
  yield takeLatest(userTypes.CHECK_USER_LOGIN, isUserAuth);
}

export function* handleUpdatePassword(action) {
  yield put(changePasswordPending());
  const { newPassword, currentPassword } = action;
  try {
    yield call(changePasswordFirebase, { newPassword, currentPassword });
    yield put(changePasswordSuccess());
  } catch (error) {
    yield put(changePasswordFailure(error.message));
  }
}

export function* watchChangePassword() {
  yield takeLatest(userTypes.CHANGE_PASSWORD, handleUpdatePassword);
}

export function* handleUpdateUserInfo(action) {
  yield put(updateUserInfoPending());
  const { userInfo, userID } = action;
  const currentUser = yield select(state => state.user.currentUser);
  const newUser = {
    ...currentUser,
    ...userInfo
  };
  const newUserUpdateState = {
    ...newUser,
    id: userID
  };
  console.log('vc: ', newUserUpdateState);
  try {
    yield call(() => updateUserProfile(newUser, userID));
    yield put(updateUserInfoSuccess(newUserUpdateState));
  } catch (error) {
    yield put(updateUserInfoFailure(error));
  }
}

export function* watchUpdateUserInfo() {
  yield takeLatest(userTypes.UPDATE_USER_INFO, handleUpdateUserInfo);
}

export default function* userSagas() {
  yield all([
    call(onSignInUser),
    call(onSignOutUser),
    call(onSignUpUser),
    call(onIsUserAuth),
    call(watchChangePassword),
    call(watchUpdateUserInfo)
  ]);
}
