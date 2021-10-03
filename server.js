'use strict';

require('dotenv').config();
const express = require('express');
const middleware = require('express-formidable');

const server = express();
const { router } = require('./router');

server.use(middleware());
server.use(router);

server.listen(process.env.PORT);