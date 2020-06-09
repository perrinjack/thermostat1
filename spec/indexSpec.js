'use strict';

describe('Thermostat', function() {

  var thermostat = new Thermostat();

  it('starts with a temperature of 20',function() { 
    expect(thermostat.currentTemperature()).toEqual(20)
  })
   
  it('increases temperature by value of argument', function(){

    thermostat.up(5)
    expect(thermostat.temperature).toEqual(25)

  })

  it('decreases temperature by value of argument', function(){

    thermostat.down(5)
    expect(thermostat.temperature).toEqual(15)
  
  })

});