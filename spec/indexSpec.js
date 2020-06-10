'use strict';

describe('Thermostat', function() {

  var thermostat; 
  beforeEach(function() {
  thermostat = new Thermostat();
  });

  it('starts with a temperature of 20',function() { 
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('increases temperature by value of argument', function(){
  
    thermostat.up(5);
    expect(thermostat.currentTemperature()).toEqual(25);

  });

  it('decreases temperature by value of argument', function(){

    thermostat.down(5);
    expect(thermostat.currentTemperature()).toEqual(15);
  
  });

  it('prevents temperature being reduced below minimum value', function(){
    expect( function() {thermostat.down(15)}).toThrow(new Error("Cannot reduce past minimum temperature!"));
    
  });

  it('starts power saving mode on',function() { 

    expect(thermostat.currentPowerMode()).toEqual(true);
  });

  it('it sets maximum temperature to 25 degrees when power saving mode is true',function() { 

    expect(thermostat.getMaxTemp()).toEqual(25);
    
  });

  it('switch power saving mode on to false' ,function() { 

    thermostat.switchPowerModeOff();
    expect(thermostat.currentPowerMode()).toEqual(false);

  });

  it('it sets maximum temperature to 32 degrees when is power saving mode is false' ,function() { 

    thermostat.switchPowerModeOff();
    expect(thermostat.getMaxTemp()).toEqual(32);

  });

});