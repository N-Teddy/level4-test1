const mongoose = require('mongoose');
const { Schema } = mongoose;

const classroomSchema = new Schema({
    location: { type: String, required: true },
    capacity: { type: Number, required: true },
})

module.exports = mongoose.model('classroom', classroomSchema);