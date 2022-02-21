'use strict';

require('dotenv').config();
const axios = require('axios');

function normalizeString(string) {
  return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
};

exports.getCoordinatesOfAdress = async function(street, number, district, city) {
  let locationParameter = `${normalizeString(street)}, ${number}, ${normalizeString(district)}, ${normalizeString(city)}, brazil`;
  for (let index = 0; index < 15; index++) {
    locationParameter =  locationParameter.replace(' ', '+');
    locationParameter =  locationParameter.replace(',', '%2C');
  };
  const url = `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.GEOKEY}&inFormat=kvp&outFormat=json&location=${locationParameter}&thumbMaps=false`;
  const dataOfRegion = await axios.get(url).then((response) => {return response.data});
  return {
    latitude: dataOfRegion.results[0].locations[0].latLng.lat,
    longitude: dataOfRegion.results[0].locations[0].latLng.lng
  };
};
