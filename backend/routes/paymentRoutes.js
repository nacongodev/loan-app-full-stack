const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/initiate', paymentController.initiatePayment);
router.post('/process', paymentController.processPayment);
router.get('/confirm/:id', paymentController.confirmPayment);

module.exports = router;
