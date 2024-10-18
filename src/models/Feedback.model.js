const mongoose = require('mongoose');
const { Schema } = mongoose;

const feedbackSchema = new Schema({
    feedback_message: { type: String, required: true }, 
    student_id: { type: String, required: true }, 
});

module.exports = mongoose.model('feedback', feedbackSchema);