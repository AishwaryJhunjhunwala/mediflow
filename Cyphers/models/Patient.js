import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  condition: String,
  lastVisit: Date,
  paymentStatus: { type: String, enum: ["paid", "due", "overdue"] },
});

export default mongoose.model("Patient", patientSchema);