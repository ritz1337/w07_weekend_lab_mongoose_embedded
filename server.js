const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


mongoose.connect('mongodb://localhost/airportdata');

var Airport = require('./models/airport');
var Flight = require('./models/flight');
// var Passenger = require('./models/passenger');


// create both flights
var flightOne = new Flight.Flight({
  from: 'CDG France',
  to: 'JFK New-York',
  airline: 'America Airlines'
})

flightOne.save()

var flightTwo = new Flight.Flight({
  from: 'Heathrow UK',
  to: 'JFK New-York, USA',
  airline: 'British Airways'
})

flightTwo.save()

// TEST: Creates one flight document, creates one airport,
// references created flight in created airport.
// Populate logs the terminal embedded document with the flight information, replacing the id

// var flightOne = new Flight({
//   from: 'USA',
//   to: 'Japan',
//   airline: 'axffds'
// })

// flightOne.save();


// create jfk airport

var inputAirport = new Airport({
  name: 'JFK',
  country: 'USA',
  opened: 'random date in 1990',
  terminal: {
    name: 'BaoTakeOff',
    flight: [flightOne, flightTwo]
    }
})

inputAirport.save( (err) => {

Airport.findOne({name: 'JFK'}).populate('terminal.flight').exec(function (err, flight) {
  if(err) {
    console.log(err)
  } else {

    console.log(JSON.stringify(flight, null, 2)) ;
  }
})
});



