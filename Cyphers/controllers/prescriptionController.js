import Prescription from "../models/Prescription.js";

export const getPrescriptionsByPatient = async (req, res) => {
  try {
    const prescriptions = await Prescription.find({ patientId: req.params.id });
    res.json(prescriptions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch prescriptions" });
  }
};

export const createPrescription = async (req, res) => {
  try {
    const prescription = new Prescription(req.body);
    await prescription.save();
    res.status(201).json(prescription);
  } catch (err) {
    res.status(400).json({ error: "Failed to create prescription" });
  }
};