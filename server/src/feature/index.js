const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./user');
const routesTest = require('./test');

const router = express.Router();

router
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true,
  }))
  .use('/', routesTest)
  .use('/users', userRoutes);

module.exports = router;
