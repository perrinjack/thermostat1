// interface.js
 $(document).ready(function() {


   var thermostat = new Thermostat();
$('#temperature').text(thermostat.temperature);

 $('#up_button').on('click', function() { // event listener
    thermostat.up(); // update model
    $('#temperature').text(thermostat.temperature); // update view
  })

  $('#down_button').on('click',function(){

    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  })

  $('#reset').on('click', function(){
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
  })

  $('#P_MODE_OFF').on('click', function(){
    thermostat.switchPowerModeOff();
    $('#temperature').text(thermostat.powerSavingMode);
  })

 
})