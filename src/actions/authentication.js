import {
    ACCESS_TOKEN_SAVE,
    AUTH_GET_STATUS,
    AUTH_GET_STATUS_SUCCESS,
    AUTH_GET_STATUS_FAILURE,
    AUTH_LOGOUT,
} from './ActionTypes';
import axios from 'axios';


/* ACCESS_TOKEN_SAVE */
export function tokensaveRequest(accessToken) {
    return (dispatch) => {
        dispatch(tokenSave(accessToken));
    }
}

export function tokenSave(accessToken) {
    return {
        type: ACCESS_TOKEN_SAVE,
        accessToken
    };
}

/* GET STATUS */
export function getStatusRequest() {
    return (dispatch) => {
        dispatch(getStatus());

        return axios.get('/api/account/getInfo')
            .then((response) => {
                dispatch(getStatusSuccess(response.data.info.uid, response.data.info.currentJob));
            }).catch((error) => {
                dispatch(getStatusFailure());
            });
    };
}

export function getStatus() {
    return {
        type: AUTH_GET_STATUS
    };
}

export function getStatusSuccess(uid, job) {
    return {
        type: AUTH_GET_STATUS_SUCCESS,
        uid,
        job
    };
}

export function getStatusFailure() {
    return {
        type: AUTH_GET_STATUS_FAILURE
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
