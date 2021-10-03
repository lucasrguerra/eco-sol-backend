'use strict';

require('dotenv').config();
const cors = require('cors');
const express = require('express');
const middleware = require('express-formidable');

const server = express();
const { router } = require('./router');

server.use(cors());
server.use(middleware({ encoding: 'utf-8'}));
server.use(router);

server.listen(process.env.PORT);