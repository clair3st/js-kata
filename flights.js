'use strict';

function flights(flights) {
  var home = flights[0][0];
  var flightsObj = {};
  var flightsNo = 1;

  flights.forEach(function(data){
    flightsObj[data[0]] = data[1];
  });

  var destination = flightsObj[home];

  while (destination != null) {
    flightsNo++;
    destination = flightsObj[destination];

    if (destination === home) {
      return flightsNo;
    }
  }

  return 0;
}

console.log(flights([['SEA', 'ORD'], ['ORD', 'JFK'], ['JFK', 'SYD']]));
