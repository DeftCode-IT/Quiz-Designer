import axios from 'axios';
import constans from './constans';

export const loginUser = (email, password) => axios.post(`${constans.baseApiUrl}${constans.endpoints.login}`, { email, password });
export const registerUser = (email, password) => axios.post(`${constans.baseApiUrl}${constans.endpoints.register}`, { email, password });

export const checkAuth = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;
  return true;
};
