import axios from 'axios';
import constants from './constants';

export const login = (email, password) => axios.post(`${constants.baseApiUrl}${constants.endpoints.login}`, { email, password });
export const register = (email, password) => axios.post(`${constants.baseApiUrl}${constants.endpoints.register}`, { email, password });
export const getToken = () => localStorage.getItem('token');
export const saveToken = token => localStorage.setItem('token', token);
export const removeToken = () => localStorage.removeItem('token');


export const isAuthenticated = () => {
  const token = getToken();
  if (!token) return false;
  return true;
};
