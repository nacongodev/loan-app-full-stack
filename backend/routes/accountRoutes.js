const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware for authentication

// Route to get user profile
router.get('/profile', authMiddleware, accountController.getProfile);

// Route to update user profile
router.put('/profile', authMiddleware, accountController.updateProfile);

// Route to get transaction history
router.get('/transactions', authMiddleware, accountController.getTransactionHistory);

module.exports = router;
