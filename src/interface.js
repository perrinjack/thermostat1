// interface.js
 $(document).ready(function() {


   var thermostat = new Thermostat();
$('#h1').text(thermostat.temperature);







 $('#up_button').on('click', function() { // event listener
    thermostat.up(); // update model
    $('#h1').text(thermostat.temperature); // update view
  })

  $('#down_button').on('click',function(){

    thermostat.down();
    $('#h1').text(thermostat.temperature);
  })

 
})