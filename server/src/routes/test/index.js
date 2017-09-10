const express = require('express');

const router = express.Router();
const { authenticate } = require('./../../middlewares/json-web-token');
const { resolve } = require('../../helpers/index');

router
  .get('/public', resolve);

router
  .get('/secret', authenticate, resolve);


module.exports = router;
