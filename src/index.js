

function Thermostat() {
    this.DEFAULT_TEMP = 20;
    this.MINIMUM_TEMP = 10;
    
    this.temperature = this.DEFAULT_TEMP;
    this.powerSavingMode = true;
};

Thermostat.prototype.currentTemperature = function() {

    return this.temperature;
};

Thermostat.prototype.up = function(temp) {

    this.temperature += temp
};

Thermostat.prototype.down = function(temp) {
    if ((this.temperature - temp) < this.MINIMUM_TEMP) { 
        throw new Error("Cannot reduce past minimum temperature!")
    } 
    else {
        this.temperature -= temp
    }  
};

Thermostat.prototype.currentPowerMode = function() {

    return this.powerSavingMode;
};

Thermostat.prototype.getMaxTemp = function() {

    if (this.powerSavingMode === true) {

        return 25;

    } else {
       
        return 32;
    }
};

Thermostat.prototype.switchPowerMode = function() {

    this.powerSavingMode = false;
};

