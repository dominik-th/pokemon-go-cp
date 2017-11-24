'use strict';

exports.calculate = (pokemon, atk, def, hp) => {
  return 1;
}

combatPowerForumla = (atk, def, hp, multiplier) => {
  const normalizedAtk = atk;
  const normalizedDef = Math.pow(def, .5);
  const normalizedHp = Math.pow(hp, .5);
  const normalizedMultiplier = Math.pow(multiplier, 2);
  const cp = Math.floor((normalizedAtk * normalizedDef * normalizedHp * normalizedMultiplier) / 10);
  return Math.max(cp, 10);
}
