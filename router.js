'use strict';

require('dotenv').config();
const router = require('express').Router();

router.get('/api/', (request, response) => {
  response.status(200);
});

router.get('/api/getData', (request, response) => {
  response.status(200);
});

exports.router = router;