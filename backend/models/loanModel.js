const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    applicantName: String,
    amount: Number,
    interestRate: Number,
    duration: Number,
    status: { type: String, default: 'Pending' }
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;

