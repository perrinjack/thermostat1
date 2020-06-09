function Thermostat() {

    this.temperature = 20;
};

Thermostat.prototype.currentTemperature = function() {

    return this.temperature;
};

Thermostat.prototype.up = function(temp) {

    this.temperature += temp
};

Thermostat.prototype.down = function(temp) {

    this.temperature -= temp
};




