const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

module.exports = (io) => {
  // Create appointment
  router.post('/', async (req, res) => {
    const data = await Appointment.create(req.body);
    io.emit('new-appointment', data);
    res.status(201).json(data);
  });

  // Get all appointments
  router.get('/', async (req, res) => {
    const all = await Appointment.find().sort({ createdAt: -1 });
    res.json(all);
  });

  // Update appointment status
  router.patch('/:id', async (req, res) => {
    const updated = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  });

  return router;
}
