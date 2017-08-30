const verifyToken   = require('./repository').verifyToken;
const generateToken = require('./repository').generateToken;
const _             = require('lodash');

const authenticate = (req, res, next) => {
    return verifyToken(req.headers.authorization)
        .then(payload => {
            _.assign(req, { resources: { payload } });
            next();
        })
        .catch(next);
};

module.exports = {
    authenticate,
    generateToken
};
