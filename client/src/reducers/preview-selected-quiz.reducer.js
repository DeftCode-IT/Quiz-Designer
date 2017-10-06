import { OPEN_QUIZ_PREVIEW, CLOSE_QUIZ_PREVIEW } from './../actions/quiz-list.actions';

export default function (state = null, action) {
  switch (action.type) {
  case OPEN_QUIZ_PREVIEW:
    return action.quiz;
  case CLOSE_QUIZ_PREVIEW:
    return null;
  default:
    return state;
  }
}
