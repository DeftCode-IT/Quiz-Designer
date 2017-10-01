const express = require('express');

const { createQuiz, editQuiz, getOneQuiz, getListQuiz, saveResultQuiz } = require('./quizzes.middleware');
const { authenticate, authQuizAccess } = require('./../../middlewares/json-web-token');
const resolve = require('./../../middlewares/resolver');

const router = express.Router();

router
  .get('/', authenticate, getListQuiz, resolve)
  .post('/', authenticate, createQuiz, resolve)
  .patch('/:id', authenticate, editQuiz, resolve)
  .get('/:id', authQuizAccess, getOneQuiz, resolve)
  .patch('/:id/fill', saveResultQuiz, resolve);

module.exports = router;
