const _ = require('lodash');
const p = require('bluebird');
const quizModel = require('./../../models').quiz;
const { errors } = require('../../configs/index');

const getPrivateList = (userID, page, pageSize = 40) => quizModel.count({ createdBy: userID })
  .then(count => quizModel.find({ createdBy: userID })
    .skip((page - 1) * pageSize)
    .limit(+pageSize)
    .then(quizes => _.assign({}, { data: quizes, totalCount: count, page, pageSize })));

const createQuiz = quizData => quizModel.create(quizData);

const getOneQuiz = (quizId, userId) => quizModel.findOne({
  $or: [
    { _id: quizId, status: 'published' },
    { _id: quizId, createdBy: userId }
  ]
})
  .then(data => {
    if (!data) {
      return p.reject(Error(errors.QUIZ_NOT_FOUND.name));
    }

    return data;
  });

const editOneQuiz = (quizID, body) => quizModel.findByIdAndUpdate(quizID, body);

module.exports = {
  getPrivateList,
  createQuiz,
  getOneQuiz,
  editOneQuiz
};
