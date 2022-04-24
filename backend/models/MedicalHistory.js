const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    patient: String,
    history: String,
    doctor: String,
    department: String,
    date: Date
});

const MedicalHistory = mongoose.model("MedicalHistory", postSchema);

module.exports = MedicalHistory;
