const mongoose = require('mongoose');
const { Schema } = mongoose;

const scheduleSchema = new Schema({
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    time: { type: Number, required: true },
    classroom_id: { type: String, required: true },
})

module.exports = mongoose.model('schedule', scheduleSchema);