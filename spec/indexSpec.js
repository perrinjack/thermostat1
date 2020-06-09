'use strict';

describe('Thermostat', function() {

  var thermostat; 
  beforeEach(function() {
  thermostat = new Thermostat();
  });

  it('starts with a temperature of 20',function() { 
    expect(thermostat.currentTemperature()).toEqual(20)
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

});