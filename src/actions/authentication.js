import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    ACCESS_TOKEN_SAVE,
} from './ActionTypes';
import axios from 'axios';

/* LOGIN */
export function loginRequest() { 
    return (dispatch) => {
        dispatch(login());

        return axios.get('https://partying.cf/oauth2/authorization/kakao')
            .then((response) => {
                // dispatch(loginSuccess(response.data.access_token));
                dispatch(loginSuccess('ababab'));
                console.log(response);
            }).catch((error) => {
                console.log('error occurred!!!!!!!');
                dispatch(loginSuccess('ababab'));
                // dispatch(loginFailure());
            });

    };
}

export function login() {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess(accessToken) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        accessToken
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}

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
