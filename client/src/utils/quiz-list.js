import axios from 'axios';
import constants from './constants';


export const getQuizzes = userId => axios.get(`${constants.baseApiUrl}${constants.endpoints.quizzes}?page=1`, { headers: { Authorization: userId } });
export const postQuiz = quiz => axios.post(`${constants.baseApiUrl}${constants.endpoints.quizzes}`, { quiz });
