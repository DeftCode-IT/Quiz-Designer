const _ = require('lodash');
const p = require('bluebird');
const quizModel = require('./../../models').quiz;
const { errors } = require('../../configs/index');

const getList = (userID, page, pageSize = 40) => quizModel.count({ createdBy: userID })
  .then(count => quizModel.find({ createdBy: userID })
    .skip((page - 1) * pageSize)
    .limit(+pageSize)
    .then(quizes => _.assign({}, { data: quizes, totalCount: count, page, pageSize })));

const create = quizData => quizModel.create(quizData);

const getOne = (quizID, userID) => quizModel.findOne({
  $or: [
    { _id: quizID, status: 'published' },
    { _id: quizID, createdBy: userID }
  ]
})
  .then(data => {
    if (!data) {
      return p.reject(Error(errors.QUIZ_NOT_FOUND.name));
    }

    return data;
  });

const editOne = (quizID, body) => quizModel.findByIdAndUpdate(quizID, body);

const saveResult = (quizID, body) => quizModel.findByIdAndUpdate(quizID, { $push: { results: body } });

module.exports = {
  getList,
  create,
  getOne,
  editOne,
  saveResult
};

