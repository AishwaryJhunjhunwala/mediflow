import Appointment from "../models/Appointment.js";

export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate("patientId");
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch appointments" });
  }
};

export const createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ error: "Failed to create appointment" });
  }
};
