'use strict';

const { performance } = require('perf_hooks');
const { calculateNumberOfSolarPanels } = require('../functions/calculateInfosOfSolarPanels');

async function calculateInfosOfSolarPanelsTest() {
  const startTime = performance.now();
  const results = calculateNumberOfSolarPanels(6.06, 300000);
  const endTime = performance.now();

  console.log(`Execution time = ${endTime - startTime} milisseconds`);
  console.log(results);
};

calculateNumberOfSolarPanelsTest();