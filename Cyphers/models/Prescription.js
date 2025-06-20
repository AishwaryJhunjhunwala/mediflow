import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  medication: String,
  notes: String,
  dateIssued: { type: Date, default: Date.now },
});

export default mongoose.model("Prescription", prescriptionSchema);