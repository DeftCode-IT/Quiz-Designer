const _ = require('lodash');
const p = require('bluebird');
const quizModel = require('./../../models').quiz;
const { errors } = require('../../config/index');

const getList = (userID, paged, pageSizep = 40) => {
  const page = Number(paged);
  const pageSize = Number(pageSizep);

  if (!page) {
    return p.reject(Error(errors.PAGE_IS_REQUIRED.name));
  }

  if (!pageSize) {
    return p.reject(Error(errors.INVALID_PARAMETER_VALUE.name));
  }

  return quizModel.count({ createdBy: userID })
    .then(count => quizModel.find({ createdBy: userID })
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .then(quizes => _.assign({}, { data: quizes, totalCount: count, page, pageSize })));
};

const create = (quizData, userID) => quizModel.create(_.assign(quizData, { createdBy: userID }));

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

const saveResult = (quizID, body) => quizModel.findByIdAndUpdate(quizID, { $push: { results: body } })
  .then(quiz => _.assign(quiz, { results: body }));

module.exports = {
  getList,
  create,
  getOne,
  editOne,
  saveResult
};

