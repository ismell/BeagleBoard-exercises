#!/usr/bin/env node
var request = require('request');
var util    = require('util');

var key = 'ec7eb641373d9256';
// See http://www.wunderground.com/weather/api/d/docs?d=data/forecast for features
// try 'forcast', 'forecast10day', 'conditions', 'astronomy', 'history'
var feature = 'conditions';

var url = util.format('http://api.wunderground.com/api/%s/%s/q/IN/Brazil.json',
                        key, feature);

console.log(url);

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var weather = JSON.parse(body);
    // console.log(weather); 
    console.log("%s, %s", weather.current_observation.temperature_string,
        weather.current_observation.wind_string); 
  } else {
    console.log("error=" + error + " response=" + JSON.stringify(response));
  }
});