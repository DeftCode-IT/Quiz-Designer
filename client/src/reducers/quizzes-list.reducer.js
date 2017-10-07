import { GET_QUIZZES } from '../actions/quiz-list.actions';

export default function (state = null, action) {
  switch (action.type) {
  case GET_QUIZZES:
    return action.quizzes;
  default:
    return state;
  }
}
