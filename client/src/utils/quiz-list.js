import axios from 'axios';
import constants from './constants';


export const getQuizzes = userId => axios.get(`${constants.baseApiUrl}${constants.endpoints.quizzes}?page=1`, { headers: { Authorization: userId } });
export const postQuiz = quiz => axios.post(`${constants.baseApiUrl}${constants.endpoints.quizzes}`, { quiz });


export const formatDate = date => {
  const year = date.getFullYear();
  const month = date.getMonth() < 10 ? `0${date.getMonth()}` : `${date.getMonth()}`;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;

  return `${year}-${month}-${day}`;
};

export const calculatePercentage = quiz => {
  const numberOfResults = quiz.results.length;
  const numberOfPassedQuizzes = quiz.results.reduce((container, result) => {
    let newContainer = container;
    if (result.score >= quiz.pointsToSuccess) newContainer = container + 1;
    return newContainer;
  }, 0);

  if (numberOfResults >= 1) {
    return (numberOfPassedQuizzes / numberOfResults) * 100;
  }

  return 0;
};
