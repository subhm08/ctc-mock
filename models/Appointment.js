const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: String,
  contact: String,
  service: String,
  date: String,
  time: String,
  note: String,
  status: {
    type: String,
    default: 'pending', // ['pending', 'completed', 'callback']
  },
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
