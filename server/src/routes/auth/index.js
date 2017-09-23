const express = require('express');

const router = express.Router();
const { loginUser, registerUser } = require('./auth.middleware');
const { resolve } = require('./../../helpers');

router
  .post('/login', loginUser, resolve)
  .post('/register', registerUser, resolve);


module.exports = router;
