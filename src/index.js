

function Thermostat() {
    this.DEFAULT_TEMP = 20;
    this.MINIMUM_TEMP = 10;
    this.MAX_TEMP = 25;
    this.temperature = this.DEFAULT_TEMP;
    this.powerSavingMode = true;
};

Thermostat.prototype.currentTemperature = function() {

    return this.temperature;
};

Thermostat.prototype.up = function() {
    if ((this.temperature) > this.MAX_TEMP) { 
        throw new Error("Cannot increase past minimum max temperature!")
    } 
    else {
    this.temperature += 1
}
};

Thermostat.prototype.down = function() {
    if ((this.temperature) < this.MINIMUM_TEMP) { 
        throw new Error("Cannot reduce past minimum temperature!")
    } 
    else {
        this.temperature -= 1
    }  
};

Thermostat.prototype.currentPowerMode = function() {

    return this.powerSavingMode;
};

Thermostat.prototype.getMaxTemp = function() {

    if (this.powerSavingMode === true) {
        
        this.MAX_TEMP = 25;

    } else {
       
        this.MAX_TEMP = 32;
    }
    return this.MAX_TEMP;
};

Thermostat.prototype.switchPowerModeOff = function() {

    this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerModeOn = function() {

    this.powerSavingMode = true;
};

