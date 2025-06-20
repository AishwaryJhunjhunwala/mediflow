import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  doctorName: String,
  date: Date,
  time: String,
  contactno: Number,
  status: { type: String, enum: ["scheduled", "completed", "cancelled"] },
});

export default mongoose.model("Appointment", appointmentSchema);
