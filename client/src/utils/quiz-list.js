import axios from 'axios';
import constants from './constants';


export const getQuizzes = userId => axios.get(`${constants.baseApiUrl}${constants.endpoints.quizzes}?page=1`, { headers: { Authorization: userId } });
export const postQuiz = quiz => axios.post(`${constants.baseApiUrl}${constants.endpoints.quizzes}`, { quiz });


export const formatDate = date => {
  const year = date.getFullYear();
  const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  return `${year}-${month}-${day} ${hour}:${minute}`;
};

export const calculatePercentage = quiz => {
  const pointsToSuccess = quiz.pointsToSuccess;
  const allFilledQuiz = quiz.results.length;
  let passedQuizzes = 0;

  if (allFilledQuiz > 1) {
    quiz.results.forEach(result => {
      passedQuizzes = result.score >= pointsToSuccess ? passedQuizzes + 1 : passedQuizzes;
    });
    return (passedQuizzes / allFilledQuiz) * 100;
  }

  return (1 / allFilledQuiz) * 100;
};
