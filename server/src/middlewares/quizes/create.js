const _ = require('lodash');
const { createQuiz } = require('./../../helpers/quizes');

const reqHandler = (req, res, next) =>
  createQuiz(req.body)
    .then(data => {
      _.assign(res, { result: { data } });
      next();
    })
    .catch(next);


module.exports = reqHandler;
