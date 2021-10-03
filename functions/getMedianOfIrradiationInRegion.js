'use strict';

const axios = require('axios');
const moment = require('moment');
moment.updateLocale('pt-br', require('moment/locale/pt-br'));

exports.getMedianOfIrradiationInRegion = async function(longitude, latitude) {
  const url = `https://power.larc.nasa.gov/api/temporal/daily/point?parameters=ALLSKY_SFC_SW_DWN&community=RE&longitude=${longitude}&latitude=${latitude}&start=${moment().subtract(13, 'months').startOf('month').format('YYYYMMDD')}&end=${moment().subtract(2, 'months').endOf('month').format('YYYYMMDD')}&format=JSON&user=DAV`;
  const data =  await axios.get(url).then((response) => {return response.data});
  const valuesOfWattsInRegion = Object.values(data.properties.parameter.ALLSKY_SFC_SW_DWN);
  valuesOfWattsInRegion.sort();

  let median = 0;
  valuesOfWattsInRegion.forEach((value) => {
    median += value;
  });

  median = parseFloat((median / valuesOfWattsInRegion.length).toFixed(2));

  return median;
};