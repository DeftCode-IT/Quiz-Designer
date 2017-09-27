import { LOGIN_USER, LOGOUT_USER, REGISTER_USER, LOGIN_START, LOGIN_ERROR } from '../actions/user.actions';
import { isAuthenticated } from '../utils/auth';

const initState = {
  isLoggedIn: isAuthenticated(),
  isStart: false,
  isError: false,
};

export default function (state = initState, action) {
  switch (action.type) {
  case LOGIN_USER:
    return { ...state, isLoggedIn: action.isLoggedIn, isError: false, isStart: false };
  case LOGIN_START:
    return { ...state, isStart: true };
  case LOGIN_ERROR:
    return { ...state, isStart: false, isError: true };
  case LOGOUT_USER:
    return { ...state, isLoggedIn: action.isLoggedIn };
  case REGISTER_USER:
    return { ...state };
  default:
    return state;
  }
}
