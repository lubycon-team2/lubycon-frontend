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
                    isLoggedIn: { $set: true },
                    valid: { $set: true },
                    accessToken: { $set: action.accessToken },
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