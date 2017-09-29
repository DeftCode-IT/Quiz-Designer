const _ = require('lodash');
const { getList, create, editOne, getOne, saveResult } = require('./quizes.helpers');

const createQuiz = (req, res, next) =>
  create(req.body, req.resources.payload._id)
    .then(data => {
      res.status(201);
      _.assign(res, { result: { data } });
      next();
    })
    .catch(next);

const editQuiz = (req, res, next) =>
  editOne(req.params.id, req.body)
    .then(data => {
      _.assign(res, { result: { data } });
      next();
    })
    .catch(next);

const getOneQuiz = (req, res, next) =>
  getOne(req.params.id, req.resources.payload._id)
    .then(data => {
      _.assign(res, { result: { data } });
      next();
    })
    .catch(next);

const getListQuiz = (req, res, next) =>
  getList(req.resources.payload._id, req.query.page, req.query.pageSize)
    .then(data => {
      _.assign(res, { result: data });
      next();
    })
    .catch(next);

const saveResultQuiz = (req, res, next) =>
  saveResult(req.params.id, req.body)
    .then(data => {
      _.assign(res, { result: data });
      next();
    })
    .catch(next);

module.exports = {
  createQuiz,
  editQuiz,
  getOneQuiz,
  getListQuiz,
  saveResultQuiz
};
