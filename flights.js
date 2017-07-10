"use strict";

function = flights(flights){
  var home = flights[0][0];
  var flightsObj = {}
  var flightsNo = 0;

  flights.forEach(function(data){
    flightsObj[data[0]] = data[1];
});

  destination = flightsObj[home]

  while destination !== null {
    destination = flightsObj[destination]



    if destination === home {
      return flightsNo
    }
  }

  return 0
}
