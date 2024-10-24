const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware for authentication
const roleMiddleware = require('../middleware/roleMiddleware'); // Middleware for role-based access control

// Route to generate loan summary report
router.get('/loan-summary', authMiddleware, roleMiddleware(['admin']), reportController.loanSummary);

// Route to generate payment history report
router.get('/payment-history', authMiddleware, roleMiddleware(['admin', 'user']), reportController.paymentHistory);

// Route to generate user activity report
router.get('/user-activity', authMiddleware, roleMiddleware(['admin']), reportController.userActivity);

module.exports = router;

