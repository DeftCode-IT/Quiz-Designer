const express = require('express');

const { loginUser, registerUser } = require('./auth.middleware');
const resolve = require('./../../middlewares/resolver');

const router = express.Router();

router
  .post('/login', loginUser, resolve)
  .post('/register', registerUser, resolve);


module.exports = router;
