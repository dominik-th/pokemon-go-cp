'use strict';

const baseStats = require('./data/base-stats');
const cpMultipliers = require('./data/cp-multiplier');

exports.calculate = (pokemon, atk, def, hp, lvl = 20) => {
  const stats = baseStats[pokemon - 1].pokemonSettings.stats;
  const multiplier = cpMultipliers[lvl.toString()];

  atk += stats.baseAttack;
  def += stats.baseDefense;
  hp += stats.baseStamina;

  return combatPowerForumla(atk, def, hp, multiplier);
}

let combatPowerForumla = (atk, def, hp, multiplier) => {
  const normalizedAtk = atk;
  const normalizedDef = Math.pow(def, .5);
  const normalizedHp = Math.pow(hp, .5);
  const normalizedMultiplier = Math.pow(multiplier, 2);
  const cp = Math.floor((normalizedAtk * normalizedDef * normalizedHp * normalizedMultiplier) / 10);
  return Math.max(cp, 10);
}
