'use strict';

const { getMedianOfIrradiationInRegion } = require('./getMedianOfIrradiationInRegion');
const { calculateValuePerWattsInReal } = require('./calculateValuePerWattsInReal');
const { calculateInfosOfSolarPanels } = require('./calculateInfosOfSolarPanels');
const { getCoordinatesOfAdress } = require('./getCoordinatesOfAdress');

exports.getDataOfRegionPerLongitudeAndLatitude = async function(longitude, latitude, consumedWattsPerMonth) {
  const medianOfIrradiationInRegion = await getMedianOfIrradiationInRegion(longitude, latitude);
  return {
    medianOfIrradiationInRegion: medianOfIrradiationInRegion,
    panelsInfos: calculateInfosOfSolarPanels(medianOfIrradiationInRegion, consumedWattsPerMonth),
    valueToSaveInReal: calculateValuePerWattsInReal(consumedWattsPerMonth)
  };
};

exports.getDataOfRegionPerAdress = async function(street, number, district, city, consumedWattsPerMonth) {
  const coordinates = await getCoordinatesOfAdress(street, number, district, city);
  const medianOfIrradiationInRegion = await getMedianOfIrradiationInRegion(coordinates.longitude, coordinates.latitude);
  return {
    medianOfIrradiationInRegion: medianOfIrradiationInRegion,
    panelsInfos: calculateInfosOfSolarPanels(medianOfIrradiationInRegion, consumedWattsPerMonth),
    valueToSaveInReal: calculateValuePerWattsInReal(consumedWattsPerMonth)
  };
};