import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import previewSelectedQuizReducer from './preview-selected-quiz.reducer';
import quizzesReducer from './quizzes-list.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  previewSelectedQuiz: previewSelectedQuizReducer,
  quizzes: quizzesReducer,
});

export default rootReducer;

