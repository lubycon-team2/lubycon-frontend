import {
    ACCESS_TOKEN_SAVE,
    AUTH_GET_STATUS,
    AUTH_LOGOUT,
} from './ActionTypes';

/* ACCESS_TOKEN_SAVE */
export function tokensaveRequest(accessToken) {
    return (dispatch) => {
        dispatch(tokenSave(accessToken));
    };
}

export function tokenSave(accessToken) {
    return {
        type: ACCESS_TOKEN_SAVE,
        accessToken,
    };
}

/* GET STATUS */
export function getStatusRequest() {
    return (dispatch) => {
        dispatch(getStatus(localStorage.getItem('access_token')));
    };
}

export function getStatus(accessToken) {
    return {
        type: AUTH_GET_STATUS,
        accessToken,
    };
}

/* LOGOUT */
export function logoutRequest() {
    return (dispatch) => {
        dispatch(logout());
    };
}

export function logout() {
    return {
        type: AUTH_LOGOUT
    };
}
