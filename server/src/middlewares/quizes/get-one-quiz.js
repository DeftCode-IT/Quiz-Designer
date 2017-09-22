const _ = require('lodash');
const { getOneQuiz } = require('./../../helpers/quizes');

const reqHandler = (req, res, next) =>
  getOneQuiz(req.params.id, req.resources.payload._id)
    .then(data => {
      _.assign(res, { result: { data } });
      next();
    })
    .catch(next);


module.exports = reqHandler;
