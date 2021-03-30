import {fromJS} from 'immutable';
import * as actionTypes from './constance';

const defaultState = fromJS({
    userInfo: {},
    loginStatus: false
})

export default (state=defaultState,action) => {
    switch(action) {
        case actionTypes.CHANGE_LOGIN_STATUS:
            return state.set("loginStatus",action.data);
        case actionTypes.CHANGE_USER_INFO:
            console.log(action,'+++++')
            return state.set("userInfo", action.data)
        default:
            return state;
    }
}