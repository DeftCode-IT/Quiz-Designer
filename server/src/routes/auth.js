const express = require('express');

const router = express.Router();
const login = require('../middlewares/auth/login');
const create = require('../middlewares/auth/create');
const { resolve } = require('../middlewares');

router
  .post('/login', login, resolve);

router
  .post('/register', create, resolve);


module.exports = router;
