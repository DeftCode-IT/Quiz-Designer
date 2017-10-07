import { getQuizzes } from '../utils/quiz-list';
import { getToken } from '../utils/auth';

export const OPEN_QUIZ_PREVIEW = 'OPEN_QUIZ_PREVIEW';
export const CLOSE_QUIZ_PREVIEW = 'CLOSE_QUIZ_PREVIEW';
export const GET_QUIZZES = 'GET_QUIZZES';

export const openQuizPreview = quiz => ({ type: OPEN_QUIZ_PREVIEW, quiz });
export const closeQuizPreview = () => ({ type: CLOSE_QUIZ_PREVIEW });
export const getQuizzesList = () => dispatch => {
  const token = getToken();
  return getQuizzes(token)
    .then(res => {
      dispatch({
        type: GET_QUIZZES,
        quizzes: res.data.data,
      });

      return res;
    },
    );
};

