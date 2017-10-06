import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import previewSelectedQuizReducer from './preview-selected-quiz.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  previewSelectedQuiz: previewSelectedQuizReducer,
});

export default rootReducer;

