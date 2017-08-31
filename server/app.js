require('module-alias/register');
const express   = require('express');
const config    = require('./config');
const app       = express();

app.listen(config.http.port, () => console.log(`Server is working on port: ${config.http.port}`));
