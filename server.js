'use strict';

require('dotenv').config();
const cors = require('cors');
const express = require('express');
const middleware = require('express-formidable');

const server = express();
const { router } = require('./router');

server.use(middleware());
server.use(router);
server.use(cors());

server.listen(process.env.PORT);