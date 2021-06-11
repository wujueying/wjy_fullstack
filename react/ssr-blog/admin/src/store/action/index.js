import * as type from '../actionTypes';

export const setUserInfo = (info) => {
  return {
      type: type.SET_USER_INFO,
      info,
  }
}
