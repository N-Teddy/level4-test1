const mongoose = require('mongoose');
const { Schema} = mongoose;

const studentSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    profile: { type: String, required: true },
    created_at: { type: Date, required: false, default: Date.now },
});

module.exports = mongoose.model('student', studentSchema);
