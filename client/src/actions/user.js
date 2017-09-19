import constants from '../utils/constants';

export function login(token) {
  return {
    type: constants.USER_LOGIN,
    payload: {
      token,
    },
  };
}

export function logout() {
  return {
    type: constants.USER_LOGOUT,
  };
}
