const mongoose = require('mongoose');

// Define the schema for notifications
const notificationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user
    message: String, // Notification message
    type: String, // Notification type (e.g., 'loan', 'payment', 'account')
    date: { type: Date, default: Date.now } // Notification date
});

// Create the Notification model from the schema
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
