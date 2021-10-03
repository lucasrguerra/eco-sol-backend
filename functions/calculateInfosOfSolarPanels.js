'use strict';

exports.calculateInfosOfSolarPanels = function(MedianOfIrradiationInRegion, requiredWattsPerMonth) {
  const energyConversionRate = 0.80;
  const panel1PowerInWattPerHour = 310;
  const panel2PowerInWattPerHour = 340;
  const panel3PowerInWattPerHour = 400;

  let wattsPerDayPanel_1 = parseInt(panel1PowerInWattPerHour * MedianOfIrradiationInRegion * energyConversionRate);
  let wattsPerDayPanel_2 = parseInt(panel2PowerInWattPerHour * MedianOfIrradiationInRegion * energyConversionRate);
  let wattsPerDayPanel_3 = parseInt(panel3PowerInWattPerHour * MedianOfIrradiationInRegion * energyConversionRate);

  let wattsPerMonthPanel_1 = parseInt(wattsPerDayPanel_1 * 30);
  let wattsPerMonthPanel_2 = parseInt(wattsPerDayPanel_2 * 30);
  let wattsPerMonthPanel_3 = parseInt(wattsPerDayPanel_3 * 30);

  let numberOfPanels_1 = parseInt(requiredWattsPerMonth / wattsPerMonthPanel_1);
  let numberOfPanels_2 = parseInt(requiredWattsPerMonth / wattsPerMonthPanel_2);
  let numberOfPanels_3 = parseInt(requiredWattsPerMonth / wattsPerMonthPanel_3);

  const panels = {
    panel_1: {
      wattsPerDay: wattsPerDayPanel_1,
      wattsPerMonth: wattsPerMonthPanel_1,
      numberOfPanels: numberOfPanels_1
    },
    panel_2: {
      wattsPerDay: wattsPerDayPanel_2,
      wattsPerMonth: wattsPerMonthPanel_2,
      numberOfPanels: numberOfPanels_2
    },
    panel_3: {
      wattsPerDay: wattsPerDayPanel_3,
      wattsPerMonth: wattsPerMonthPanel_3,
      numberOfPanels: numberOfPanels_3
    }
  };

  return panels;
};