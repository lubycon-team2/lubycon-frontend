import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    status: {
        userId: '',
        isLoggedIn: false,
        accessToken: '',
        phoneVerified: 'INIT',
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
        // SET STATUS
        case types.AUTH_SET_STATUS: // 새로고침했을 때만 실행됨 
            return update(state, {
                status: {
                    isLoggedIn: { $set: true },
                    // userId: { $set: action.userId },
                    accessToken: { $set: action.accessToken },
                }
            });
        // PHONE_AUTH
        case types.PHONE_AUTH:
            return update(state, {
                status: {
                    phoneVerified: { $set: 'WAITING' },
                }
            })
        // PHONE_AUTH_VERIFY
        case types.PHONE_AUTH_VERIFY:
            return update(state, {
                status: {
                    phoneVerified: { $set: 'SUCCESS' },
                }
            })
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