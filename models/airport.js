var mongoose = require('mongoose');
var Flight = require('./flight.js');

var terminalSchema = new mongoose.Schema({
  name: String,
  flight: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flight'
  }],
  capacity: Number
})


var airportSchema = new mongoose.Schema({
  name: String,
  country: String,
  terminal: [terminalSchema],
  opened: String
})


var Airport = mongoose.model('Airport', airportSchema);

module.exports = Airport
