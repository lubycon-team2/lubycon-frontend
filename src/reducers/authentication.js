import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    login: {
        status:  'INIT'
    },
    status: {
        valid: false,
        isLoggedIn: false,
        accessToken: '',
    },
}

export default function authentication(state, action) {
    if(typeof state === "undefined") state = initialState;
    
    switch(action.type) {
        // LOGIN
        case types.AUTH_LOGIN:
            return update(state, {
                login: {
                    status: { $set: 'WAITING' }
                }
            });
        case types.AUTH_LOGIN_SUCCESS:
            return update(state, {
                login: {
                    status: { $set: 'SUCCESS' }
                },
                status: {
                    isLoggedIn: { $set: true },
                    accessToken: { $set: action.accessToken },
                }
            });
        case types.AUTH_LOGIN_FAILURE:
            return update(state, {
                login: {
                    status: { $set: 'FAILURE' }
                }
            });
        case types.ACCESS_TOKEN_SAVE:
            return update(state, {
                status: {
                    isLoggedIn: { $set: true},
                    accessToken: { $set: action.accessToken },
                }
            });
        // GET STATUS
        case types.AUTH_GET_STATUS: // 쿠키에 세션이 저장된 상태에서, 새로고침했을 때만 실행됨 
            return update(state, {
                status: {
                    isLoggedIn: { $set: true }
                }
            });
        case types.AUTH_GET_STATUS_SUCCESS:
            return update(state, {
                status: {
                    valid: { $set: true },
                    accessToken: { $set: action.accessToken },
                }
            });
        case types.AUTH_GET_STATUS_FAILURE:
            return update(state, {
                status: {
                    valid: { $set: false },
                    isLoggedin: { $set: false }
                }
            });
        // LOGOUT
        case types.AUTH_LOGOUT:
            return update(state, {
                status: {
                    isLoggedIn: { $set: false },
                    accessToken: { $set: '' }
                }
            });
        default:
            return state;

    }
}