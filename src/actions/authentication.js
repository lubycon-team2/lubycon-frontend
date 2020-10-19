import {
    ACCESS_TOKEN_SAVE,
    AUTH_GET_STATUS,
    AUTH_LOGOUT,
} from './ActionTypes';
import axios from 'axios';

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
export function getStatusRequest(token) {
    return (dispatch) => {
        dispatch(getStatus());
        console.log('haha', token);
        return axios.get('https://api.partying.cf/profiles/me', {headers: {
            Authorization: 'Bearer ' + JSON.stringify(token)
        }})
            .then((response) => {
                // dispatch(getStatusSuccess(response.data));
                console.log('response data', response.data);
            }).catch((error) => {
                // dispatch(getStatusFailure());
                console.error();
            });
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
