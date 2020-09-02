import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
} from './ActionTypes';
import axios from 'axios';

/* LOGIN */
export function loginRequest() { 
    return (dispatch) => {
        dispatch(login());

        return axios.get('/oauth2/authentication/kakao')
            .then((response) => {
                // dispatch(loginSuccess(response.data.access_token));
                dispatch(loginSuccess('ababab'));
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