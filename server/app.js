require('module-alias/register');

const config = require('./config');
const express = require('express');

const app = express();

app.listen(config.http.port, () => console.log(`Server is working on port: ${config.http.port}`));