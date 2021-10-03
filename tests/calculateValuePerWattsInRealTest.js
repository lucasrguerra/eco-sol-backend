'use strict';

const { performance } = require('perf_hooks');
const { calculateValuePerWattsInReal } = require('../functions/calculateValuePerWattsInReal');

async function calculateValuePerWattsInRealTest() {
  const startTime = performance.now();
  const result = calculateValuePerWattsInReal(300000);
  const endTime = performance.now();

  console.log(`Execution time = ${endTime - startTime} milisseconds`);
  if(result === 240) {
    console.log(`Culculate with sucess`);
  } else {
    console.log(`Calculate with error`);
    console.log(`Result = ${result} | Expected = 6.06`);
  };
};

calculateValuePerWattsInRealTest();