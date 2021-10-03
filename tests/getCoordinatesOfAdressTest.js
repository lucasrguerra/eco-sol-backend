'use strict';

const { performance } = require('perf_hooks');
const { getCoordinatesOfAdress } = require('../functions/getCoordinatesOfAdress');

async function getCoordinatesOfAdressTest() {
  const startTime = performance.now();
  const result = await getCoordinatesOfAdress(`Rua Uriel de Holanda`, `576`, `Linha do Tiro`, `Recife`);
  const endTime = performance.now();

  console.log(`Execution time = ${endTime - startTime} milisseconds`);
  if(result.latitude === -8.007771 && result.longitude === -34.911972) {
    console.log(`Calculate with sucess`);
  } else {
    console.log(`Calculate with sucess`);
    console.log(`Longitude = ${result.latitude} | Expected = -8.007771`);
    console.log(`Longitude = ${result.longitude} | Expected = -34.911972`);
  };
};

getCoordinatesOfAdressTest();