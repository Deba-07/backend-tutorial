import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    patientName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    diagnosedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    diseaseName: {
        type: String,
        required: true
    },
    medicines: [
        {
            type: String,
            required: true
        }
    ]
}, {timestamps: true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)