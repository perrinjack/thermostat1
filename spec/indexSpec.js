describe('Thermostat', function() {

it('starts with a temperature of 20',function() { 
var thermostat = new Thermostat();
expect(thermostat.temperature).toEqual(20)
})
});