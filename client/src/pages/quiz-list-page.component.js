import React from 'react';
import QuizList from './../components/quiz-list/quiz-list.component';
import QuizPreview from './../components/quiz-list/quiz-preview.component';

const QuizListPage = () => (
  <div>
    <QuizPreview />
    <QuizList />
  </div>
);

export default QuizListPage;
