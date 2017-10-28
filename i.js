
const request = require('request');
const argv = require('yargs').argv;

var apiKey = '8f246915aca11bc32022d9958d6d67c7';
var city = argv.c || 'portland';
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    var weather = JSON.parse(body)
    var message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});