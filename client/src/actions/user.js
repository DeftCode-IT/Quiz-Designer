import { loginUserDB, registerUserDB, saveToken, removeToken } from '../utils/auth';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REGISTER_USER = 'REGISTER_USER';


export function loginUser(email, password) {
  return dispatch => loginUserDB(email, password).then((res) => {
    const token = res.data.data.token;
    saveToken(token);

    dispatch({
      type: LOGIN_USER,
      isLoggedIn: true,
    });

    return res;
  });
}

export function logoutUser() {
  return (dispatch) => {
    removeToken();

    dispatch({
      type: LOGOUT_USER,
      isLoggedIn: false,
    });
  };
}

export function registerUser(email, password) {
  return dispatch => registerUserDB(email, password).then((res) => {
    dispatch({
      type: REGISTER_USER,
    });

    return res;
  });
}
