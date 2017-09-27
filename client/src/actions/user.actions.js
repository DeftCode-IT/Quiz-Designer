import { login, register, saveToken, removeToken } from '../utils/auth';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REGISTER_USER = 'REGISTER_USER';

export const loginStart = () => ({ type: LOGIN_START });
export const loginError = () => ({ type: LOGIN_ERROR });

export function loginUser(email, password) {
  return dispatch => {
    dispatch(loginStart());
    login(email, password)
      .then(res => {
        const token = res.data.data.token;
        saveToken(token);

        dispatch({
          type: LOGIN_USER,
          isLoggedIn: true,
          isStart: false,
          isError: false,
        });

        return res;
      },
      )
      .catch(() => {
        dispatch(loginError());
      });
  };
}

export function logoutUser() {
  return dispatch => {
    removeToken();

    dispatch({
      type: LOGOUT_USER,
      isLoggedIn: false,
    });
  };
}

export function registerUser(email, password) {
  return dispatch => register(email, password).then(res => {
    dispatch({
      type: REGISTER_USER,
    });

    return res;
  });
}
