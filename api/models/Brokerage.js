const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Brokerage = new Schema({
  type: {
    type: String
  },
  rate: {
    type: Number
  },
  start_date: {
    type: Date
  },
  end_date: {
    type: Date
  }
},{
    collection: 'brokerage'
});

module.exports = mongoose.model('Brokerage', Brokerage);