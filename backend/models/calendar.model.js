const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const calendarSchema = new Schema({
  empID: { type: String, required: true, ref: 'Employee' },
  status: { type: String, required: true },
  time: { type: Date, required: true},
  date: { type: String, required: true }
});

const Calendar = mongoose.model('Calendar', calendarSchema);

module.exports = Calendar;