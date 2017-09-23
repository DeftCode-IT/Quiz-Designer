const express = require('express');

const router = express.Router();
const createQuiz = require('../middlewares/quizes/create');
const editOneQuiz = require('../middlewares/quizes/edit-one-quiz');
const getQuizesList = require('../middlewares/quizes/get-quizes-list');
const getOneQuiz = require('../middlewares/quizes/get-one-quiz');
const { authenticate, authQuizAccess } = require('./../middlewares/json-web-token');
const { resolve } = require('../helpers');

router
  .get('/', authenticate, getQuizesList, resolve);

router
  .post('/', authenticate, createQuiz, resolve);

router
  .patch('/:id', authenticate, editOneQuiz, resolve);

router
  .get('/:id', authQuizAccess, getOneQuiz, resolve);


module.exports = router;
