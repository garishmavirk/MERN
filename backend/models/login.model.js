const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginSchema = new Schema({
  empID: { type: String, required: true, unique: true, ref: 'Employee' },
  password: { type: String, required: true },
}, {
  timestamps: true,
});

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;