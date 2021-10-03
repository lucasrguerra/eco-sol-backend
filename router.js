'use strict';

require('dotenv').config();
const router = require('express').Router();
const {
  getDataOfRegionPerAdress,
  getDataOfRegionPerLongitudeAndLatitude
} = require('./functions/index');

router.get('/', (request, response) => {
  response.status(200);
  response.send('Server running')
});

router.post('/api/getDataWithAdress', async (request, response) => {
  response.status(200);
  const fields = request.fields;
  const responseData = await getDataOfRegionPerAdress(
    fields.street,
    fields.number,
    fields.district,
    fields.city,
    fields.consumedWattsPerMonth
  );
  response.json(responseData);
});

router.post('/api/getDataWithCoordinates', async (request, response) => {
  response.status(200);
  const fields = request.fields;
  const responseData = await getDataOfRegionPerLongitudeAndLatitude(
    fields.longitude,
    fields.latitude,
    fields.consumedWattsPerMonth
  );
  response.json(responseData);
});

exports.router = router;