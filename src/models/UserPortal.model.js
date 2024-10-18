const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserPortalSchema = new Schema({
    userRole: { type: 'string', required: true },
    internal_message: { type: 'string', required: true },
})

module.exports = mongoose.model('userportal', UserPortalSchema);