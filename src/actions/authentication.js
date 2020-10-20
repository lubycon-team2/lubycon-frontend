import {
    ACCESS_TOKEN_SAVE,
    AUTH_GET_STATUS,
    PHONE_AUTH,
    AUTH_LOGOUT,
} from './ActionTypes';
import axios from 'axios';

/* ACCESS_TOKEN_SAVE */
export function tokensaveRequest(accessToken) {
    return (dispatch) => {
        dispatch(tokenSave(accessToken));

        return axios.get('https://api.partying.cf/profiles/me', {headers: {
            Authorization: 'Bearer ' + accessToken
        }}).then((response) => {
            localStorage.setItem('isPhoneAuth', response.data.isPhoneAuthentication);
            localStorage.setItem('profileUrl', response.data.profileUrl);
            localStorage.setItem('name', response.data.name);
            localStorage.setItem('userId', response.data.userId);
        })
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
        // console.log('haha', token);
        // console.log('haha', window.atob(token));
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

/* PHONE AUTH */
export function phoneAuthRequest(accessToken, phoneNum) {
    return (dispatch) => {
        dispatch(phoneAuth());
        console.log(accessToken, phoneNum);
        return axios.post('https://api.partying.cf/authenticate/sms/send', 
                        {
                            headers: {
                                Authorization: 'Bearer ' + accessToken
                            },
                            to: phoneNum
                        })
                .then((response) => {
                    console.log(response)
                    if(response.status === 200) {
                        localStorage.setItem('isPhoneAuth', 'true');
                        dispatch(phoneAuthSuccess(phoneNum));
                    }
                }).catch((err) => {
                    console.error(err);
                })
    }
}

export function phoneAuth() {
    return {
        type: PHONE_AUTH,
    }
}

export function phoneAuthSuccess() {
    return {
        type: PHONE_AUTH,
    }
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
