'use strict';

const { performance } = require('perf_hooks');
const { getMedianOfIrradiationInRegion } = require('../functions/getMedianOfIrradiationInRegion');

async function getMedianOfIrradiationInRegionTest() {
  const startTime = performance.now();
  const result = await getMedianOfIrradiationInRegion(-34.9020, -8.0197);
  const endTime = performance.now();

  console.log(`Execution time = ${endTime - startTime} milisseconds`);
  if(result === 6.06) {
    console.log(`Culculate with sucess`);
  } else {
    console.log(`Calculate with error`);
    console.log(`Result = ${result} | Expected = 6.06`);
  };
};

getMedianOfIrradiationInRegionTest();
