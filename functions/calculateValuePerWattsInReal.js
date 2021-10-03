'use strict';

exports.calculateValuePerWattsInReal = function(consumedWattsPerMonth) {
  const realPerKiloWatt = 0.8;
  const amount = (consumedWattsPerMonth / 1000) * realPerKiloWatt;

  return amount;
};