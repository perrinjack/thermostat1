function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.MINIMUM_TEMP = 10;
  this.MAX_TEMP = 32;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSavingMode = true;
}

Thermostat.prototype.currentTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.up = function () {
  var max_temp = this.getMaxTemp()
  console.log(max_temp)
  if (this.temperature === max_temp) {
    return;
  }

  this.temperature += 1;
};

Thermostat.prototype.down = function () {
  if (this.temperature === this.MINIMUM_TEMP) {
    throw new Error('Cannot reduce past minimum temperature!');
  } else {
    this.temperature -= 1;
  }
};

Thermostat.prototype.currentPowerMode = function () {
  return this.powerSavingMode;
};

Thermostat.prototype.getMaxTemp = function () {
  if (this.powerSavingMode === true) {
    return  25;
  } else {
    return  32;
   
  }
  // return this.MAX_TEMP;
};

Thermostat.prototype.switchPowerModeOff = function () {
  return (this.powerSavingMode = false);
};

Thermostat.prototype.switchPowerModeOn = function () {
  return (this.powerSavingMode = true);
};

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < 18) {
    return 'low-usage';
  } else if (this.temperature < 25) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};
