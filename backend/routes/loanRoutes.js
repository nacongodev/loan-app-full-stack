
const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

router.post('/apply', loanController.submitLoanApplication);
router.get('/review/:id', loanController.reviewLoanApplication);
router.post('/approve/:id', loanController.approveLoanApplication);

module.exports = router;
