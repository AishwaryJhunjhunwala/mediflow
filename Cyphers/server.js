import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import patientRoutes from "./routes/patients.js";
import appointmentRoutes from "./routes/appointment.js";
import analyticsRoutes from "./routes/analytics.js";



const app = express();

await connectDB();

// middleware
app.use(cors())
app.use(express.json())

app.use("/api/patients", patientRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/analytics", analyticsRoutes);


const PORT= process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`app is listening to port ${PORT}` );
});


app.get("/",(req,res)=>{
    res.send("APPI IS WORKING");
})
