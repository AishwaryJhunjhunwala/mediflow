import express from "express";
import { getAppointments, createAppointment } from "../controllers/appointmentController.js";

const router = express.Router();

router.get("/", getAppointments);
router.post("/", createAppointment);

export default router;