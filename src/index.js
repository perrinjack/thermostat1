

function Thermostat() {
    const DEFAULT_TEMP = 20;
    
    this.temperature = DEFAULT_TEMP;
};

Thermostat.prototype.currentTemperature = function() {

    return this.temperature;
};

Thermostat.prototype.up = function(temp) {

    this.temperature += temp
};

Thermostat.prototype.down = function(temp) {
    const MINIMUM_TEMP = 10;
    if ((this.temperature - temp) < MINIMUM_TEMP){ 
    throw new Error("Cannot reduce past minimum temperature!")
    } 
    else {
        
        this.temperature -= temp
    }
    
};




