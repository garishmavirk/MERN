const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const empSchema = new Schema({
  empID: { type: String, required: true, unique: true },
  empName: { type: String, required: true },
  status: { type: String, required: true },
  location: { type: [Number], index: { type: '2dsphere', sparse: true}},
  phone: { type: String, required: true},
  email: { type: String, required: true, unique: true },
  
}, {
  timestamps: true,
});

const Employee = mongoose.model('Employee', empSchema);

module.exports = Employee;