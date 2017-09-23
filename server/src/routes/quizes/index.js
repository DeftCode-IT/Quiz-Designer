const express = require('express');

const router = express.Router();
const { createQuiz, editQuiz, getOneQuiz, getListQuiz, saveResultQuiz } = require('./quizes.middleware');
const { authenticate, authQuizAccess } = require('./../../middlewares/json-web-token');
const { resolve } = require('./../../helpers');

router
  .get('/', authenticate, getListQuiz, resolve)
  .post('/', authenticate, createQuiz, resolve)
  .patch('/:id', authenticate, editQuiz, resolve)
  .get('/:id', authQuizAccess, getOneQuiz, resolve)
  .patch('/:id/result', saveResultQuiz, resolve);

module.exports = router;
