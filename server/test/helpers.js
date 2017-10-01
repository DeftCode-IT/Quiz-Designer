const constants = {
  token: null,
  user1: null,
  user2: null
};

const createUser = (config = {}) => {
  return Object.assign({
    email: 'example@example.com',
    password: '$2a$10$1Dih.A4T/LsoFnqyYHo93u25Wkv67wKHTr8sDANrh9c2BiJR8ZjF6'
  }, config);
};

const createQuiz = (config = {}) => {
  return Object.assign({
    title: 'Some title example for quiz',
    successMessage: 'Message that will be shown if user pass quiz',
    failureMessage: 'Message that will be shown if user fail quiz',
    pointsToSuccess: 24,
    status: 'published',
    version: 4,
    questions: [{
      index: 1,
      type: 'multiple',
      question: 'How old is statue of liberty?',
      answers: [
        'Very old',
        'Pretty young',
        'Not that old'
      ],
      correctAnswers: [
        1,
        3
      ]
    }]
  }, config);
};

module.exports = {
  constants,
  createUser,
  createQuiz
};