const Notification = require('../models/notificationModel');
const notificationService = require('../services/notificationService');

// Controller to create a notification
exports.createNotification = async (req, res) => {
    try {
        const notification = new Notification(req.body); // Create a new notification document
        await notification.save(); // Save the notification document to the database
        await notificationService.sendNotification(notification); // Send the notification
        res.status(201).send('Notification created successfully'); // Send a success response
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong
    }
};

// Controller to get notifications for a user
exports.getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({ userId: req.user.userId }); // Find notifications by user ID
        res.status(200).send(notifications); // Send the notifications as the response
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong
    }
};

// Controller to delete a notification
exports.deleteNotification = async (req, res) => {
    try {
        const notification = await Notification.findByIdAndDelete(req.params.id); // Delete the notification document
        if (!notification) {
            return res.status(404).send('Notification not found'); // Send an error response if notification not found
        }
        res.status(200).send('Notification deleted successfully'); // Send a success response
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong
    }
};
