const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
    courseId: {type: String, required: true},
    course_name: {type: String, required: true},
    description: {type: String, required: true},
    category: { type: String, required: true },
    schedule_id: { type: String, required: true },
    classroom_id: { type: String, required: true },
    instructor_id: { type: String, required: true },
    
})

module.exports = mongoose.model('course', courseSchema);