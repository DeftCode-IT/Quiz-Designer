const _ = require('lodash');
const { getPrivateList } = require('./../../helpers/quizes');

const reqHandler = (req, res, next) =>
  getPrivateList(req.resources.payload._id, req.query.page, req.query.pageSize)
    .then(data => {
      _.assign(res, { result: data });
      next();
    })
    .catch(next);

module.exports = reqHandler;
