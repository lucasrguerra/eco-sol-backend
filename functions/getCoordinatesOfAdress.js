'use strict';

require('dotenv').config();
const axios = require('axios');

exports.getCoordinatesOfAdress = async function(street, number, district, city) {
  let locationParameter = `${street.normalize('NFD').replace(/[\u0300-\u036f]/g, "")}, ${number}, ${district.normalize('NFD').replace(/[\u0300-\u036f]/g, "")}, ${city.normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`;
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