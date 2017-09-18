import axios from 'axios';
import constants from './constants';

export const loginUser = (email, password) => axios.post(`${constants.baseApiUrl}${constants.endpoints.login}`, { email, password });
export const registerUser = (email, password) => axios.post(`${constants.baseApiUrl}${constants.endpoints.register}`, { email, password });

