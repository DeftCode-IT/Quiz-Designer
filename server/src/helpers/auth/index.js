const p = require('bluebird');
const _ = require('lodash');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const userModel = require('../../models').user;
const { errors } = require('../../constants');
const { generateToken } = require('../../middlewares/json-web-token');

mongoose.Promise = p;

const removeFragileData = user => _.omit(user.toJSON(), [
  'password',
  '__v',
  '_id',
]);

const login = body =>
  userModel.findOne({
    email: body.email,
  })
    .then((user) => {
      if(!user || !(bcrypt.compareSync(body.password, user.password))) {
        return p.reject(Error(errors.INVALID_LOGIN.name));
      }

      return _.pick(user, ['password']);
    })
    .then(generateToken);

const create = data => {
  const user = data;

  if (!(_.get(user, 'email')) || !(_.get(user, 'password'))) {
    return p.reject(Error(errors.INVALID_REGISTER.name));
  }

  user.password = bcrypt.hashSync(user.password);
  return userModel.create(user)
    .then(removeFragileData);
};

module.exports = {
  login,
  create,
};
