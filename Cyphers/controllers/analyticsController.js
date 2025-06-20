import Patient from "../models/Patient.js";
import Appointment from "../models/Appointment.js";

export const getAnalytics = async (req, res) => {
  const totalPatients = await Patient.countDocuments();
  const totalAppointments = await Appointment.countDocuments();
  const recentPatients = await Patient.find().sort({ lastVisit: -1 }).limit(5);

  res.json({
    totalPatients,
    totalAppointments,
    recentPatients,
  });
};
