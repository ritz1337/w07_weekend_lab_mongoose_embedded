var mongoose = require('mongoose');

var FlightSchema = new mongoose.Schema ({
  from: String,
  to: String,
  airline: String,
  passengers: Number
})

var TerminalSchema = new mongoose.Schema ({
  name: String,
  flight:[FlightSchema],
  capacity: Number
})

var Flight = mongoose.model('Flight', FlightSchema);
var Terminal = mongoose.model('Terminal', TerminalSchema);

module.exports = {
  Flight,
  Terminal
}
