'use strict';

describe('Thermostat', function() {

  var thermostat; 
  beforeEach(function() {
  thermostat = new Thermostat();
  });

  it('starts with a temperature of 20',function() { 
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('increases temperature by 1 unit', function(){
  
    thermostat.up();
    expect(thermostat.currentTemperature()).toEqual(21);

  });

  it('decreases temperature by 1 unit', function(){

    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(19);
  
  });

  it('prevents temperature being reduced below minimum value', function(){
    for(var i = 0; i < 11; i++) { thermostat.down()}
    expect( function() {thermostat.down()}).toThrow(new Error("Cannot reduce past minimum temperature!"));
    
  });

  it('starts power saving mode on',function() { 

    expect(thermostat.currentPowerMode()).toEqual(true);
  });

 

  it('switch power saving mode off to false' ,function() { 

    thermostat.switchPowerModeOff();
    expect(thermostat.currentPowerMode()).toEqual(false);

  });

  it('switch power saving mode back on to true' ,function() { 

    thermostat.switchPowerModeOff();
    thermostat.switchPowerModeOn();
    expect(thermostat.currentPowerMode()).toEqual(true);

  });

  it('it sets maximum temperature to 25 degrees when power saving mode is true',function() { 

    expect(thermostat.getMaxTemp()).toEqual(25);
    
  });

  it('it sets maximum temperature to 32 degrees when is power saving mode is false' ,function() { 

    thermostat.switchPowerModeOff();
    expect(thermostat.getMaxTemp()).toEqual(32);

  });

  it('prevents temperature being increased over max temperature', function() {
    for(var i = 0; i < 7; i++) { thermostat.up()}
    expect(thermostat.currentTemperature()).toEqual(25);
    
  });

  it('reset temperature to default 20 degree', function() {
    for (var i = 0; i < 6; i++) { thermostat.up()} 
    thermostat.reset();
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('return low usage if current temperature is below 18', function(){
    for (var i = 0; i < 4; i++) { thermostat.down()}
    expect(thermostat.energyUsage()).toEqual("low-usage");
  });

  it('return medium usage if current temperature is between 18 and 25', function(){
    expect(thermostat.energyUsage()).toEqual("medium-usage");
  });

  it('return high usage if current temperature is above 25', function(){
   console.log(thermostat.switchPowerModeOff())
    for ( var i=0; i<7; i++) { thermostat.up()}
    expect(thermostat.energyUsage()).toEqual("high-usage");
  })


  });
