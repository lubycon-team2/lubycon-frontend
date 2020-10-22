import {
    ACCESS_TOKEN_SAVE,
    AUTH_SET_STATUS,
    PHONE_AUTH,
    PHONE_AUTH_VERIFY,
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
            localStorage.setItem(
                'userInfo',
                JSON.stringify({
                    userId: response.data.userId,
                    name: response.data.name,
                    accessToken: accessToken,
                    profileUrl: response.data.profileUrl,
                    isLoggedIn: true,
                })
            );
            localStorage.setItem('isPhoneAuth', response.data.isPhoneAuthentication);
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
export function setStatus(accessToken) {
    return {
        type: AUTH_SET_STATUS,
        accessToken,
        // userId,
    };
}

/* PHONE AUTH */
export function phoneAuthRequest(accessToken, phoneNum) {
    return (dispatch) => {
        dispatch(phoneAuth());
        return axios.post('https://api.partying.cf/authenticate/sms/send', 
                        {
                            headers: {
                                Authorization: 'Bearer ' + accessToken
                            },
                            to: phoneNum
                        })
                .then((response) => {
                    // localStorage.setItem('isPhoneAuth', true); 
                    // dispatch(phoneAuthSuccess(phoneNum));
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

/* PHONE_AUTH_VERIFY */
export function phoneAuthVerifyRequest(accessToken, phoneNum, authNum) {
    return (dispatch) => {
        dispatch(phoneAuthVerify());
        
        return axios.post('https://api.partying.cf/authenticate/sms/verify', 
        {
            headers: {
                Authorization: 'Bearer ' + accessToken
            },
            to: phoneNum,
            code: authNum,
        })
        .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.error(err);
        })
    }
}

export function phoneAuthVerify() {
    return {
        type: PHONE_AUTH_VERIFY,
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
