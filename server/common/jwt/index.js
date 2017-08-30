const verifyToken   = require('./repository').verifyToken;
const _             = require('lodash');
const generateToken = require('./repository').generateToken;

const auth = (req, res, next) => {
    const token = req.query.token || (req.body && req.body.token) || req.headers.auth || req.headers.authorization;

    return verifyToken(token)
        .then(payload => {
            _.assign(req, { resources: { payload } });
            next();
        })
        .catch(next);
};

module.exports = {
    auth,
    generateToken
};
