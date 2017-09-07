const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./user');

const router = express.Router();

router
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true,
  }))
  .use('/users', userRoutes);

module.exports = router;
