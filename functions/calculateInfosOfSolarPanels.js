'use strict';

class Solar_Panel {
  constructor(panelPower, MedianOfIrradiationInRegion, requiredWattsPerMonth) {
    this.wattsPerHour = panelPower * 0.8;
    this.wattsPerDay = parseInt(this.wattsPerHour * MedianOfIrradiationInRegion);
    this.wattsPerMonth = parseInt(this.wattsPerDay * 30);
    this.numberOfPanelsNeeded = parseInt(requiredWattsPerMonth / this.wattsPerMonth) + 1;
  };
};

exports.calculateInfosOfSolarPanels = function(MedianOfIrradiationInRegion, requiredWattsPerMonth) {
  const energyConversionRate = 0.80;
  const panel_1 = new Solar_Panel(310, MedianOfIrradiationInRegion, requiredWattsPerMonth);
  const panel_2 = new Solar_Panel(340, MedianOfIrradiationInRegion, requiredWattsPerMonth);
  const panel_3 = new Solar_Panel(400, MedianOfIrradiationInRegion, requiredWattsPerMonth);

  const panels = { panel_1, panel_2, panel_3 };

  return panels;
};