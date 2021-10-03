'use strict';

class Solar_Panel {
  constructor(panelPower, MedianOfIrradiationInRegion, requiredWattsPerMonth) {
    this.panelPower = panelPower;
    this.wattsPerHour = panelPower * 0.8;
    this.wattsPerDay = parseInt(this.wattsPerHour * MedianOfIrradiationInRegion);
    this.wattsPerMonth = parseInt(this.wattsPerDay * 30);
    this.wattsPerYear = parseInt(this.wattsPerMonth * 12);
    this.numberOfPanelsNeeded = parseInt(requiredWattsPerMonth / this.wattsPerMonth) + 1;
  };
};

exports.calculateInfosOfSolarPanels = function(MedianOfIrradiationInRegion, requiredWattsPerMonth) {
  const energyConversionRate = 0.80;
  const panelModel_1 = new Solar_Panel(310, MedianOfIrradiationInRegion, requiredWattsPerMonth);
  const panelModel_2 = new Solar_Panel(340, MedianOfIrradiationInRegion, requiredWattsPerMonth);
  const panelModel_3 = new Solar_Panel(400, MedianOfIrradiationInRegion, requiredWattsPerMonth);

  const panels = { panelModel_1, panelModel_2, panelModel_3 };

  return panels;
};