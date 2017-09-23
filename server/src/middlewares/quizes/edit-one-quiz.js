const _ = require('lodash');
const { editOneQuiz } = require('./../../helpers/quizes');

const reqHandler = (req, res, next) =>
  editOneQuiz(req.params.id, req.body)
    .then(data => {
      _.assign(res, { result: { data } });
      next();
    })
    .catch(next);

module.exports = reqHandler;
