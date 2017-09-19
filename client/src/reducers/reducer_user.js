import constants from '../utils/constants';
import { checkAuth } from '../utils/auth';


const initState = {
  isLogged: checkAuth(),
};

export default function (state = initState, action) {
  switch (action.type) {
  case constants.USER_LOGIN:
    localStorage.setItem('token', action.payload.token);
    return Object.assign(state, { isLogged: true });
  case constants.USER_LOGOUT:
    localStorage.removeItem('token');
    return Object.assign(state, { isLogged: false });
  default:
    return state;
  }
}
