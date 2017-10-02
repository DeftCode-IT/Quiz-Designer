const constants = {
  user1: {
    email: 'example@example.com',
    password: 'examplepassword',
    token: null,
    _id: null
  },
  user2: {
    email: 'example2@example.com',
    password: 'examplepassword',
    token: null,
    _id: null
  }
};

const createQuiz = (config = {}) => {
  return Object.assign({
    title: 'Some title example for quiz',
    successMessage: 'Message that will be shown if user pass quiz',
    failureMessage: 'Message that will be shown if user fail quiz',
    pointsToSuccess: 24,
    status: 'published',
    version: 4,
    createdBy: '2hjjdhdj7kjd8a82j4b4bhj7',
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
  createQuiz
};