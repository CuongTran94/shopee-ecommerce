import userTypes from "./user.types";

const initialState = {
    currentUser: null,
    authErr: null,
    isLoading: false
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
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
        default:
            return state;
    }
}

export default userReducer;