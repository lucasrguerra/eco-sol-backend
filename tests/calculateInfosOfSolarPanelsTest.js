'use strict';

const { performance } = require('perf_hooks');
const { calculateInfosOfSolarPanels } = require('../functions/calculateInfosOfSolarPanels');

async function calculateInfosOfSolarPanelsTest() {
  const startTime = performance.now();
  const results = calculateInfosOfSolarPanels(6.06, 300000);
  const endTime = performance.now();

  console.log(`Execution time = ${endTime - startTime} milisseconds`);
  console.log(results);
};

calculateInfosOfSolarPanelsTest();