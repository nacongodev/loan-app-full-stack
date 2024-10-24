const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware for authentication

// Route to create a notification
router.post('/', authMiddleware, notificationController.createNotification);

// Route to get notifications for a user
router.get('/', authMiddleware, notificationController.getNotifications);

// Route to delete a notification
router.delete('/:id', authMiddleware, notificationController.deleteNotification);

module.exports = router;
