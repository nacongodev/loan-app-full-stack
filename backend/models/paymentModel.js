const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    loanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Loan' },
    amount: Number,
    status: { type: String, default: 'Pending' },
    transactionId: String
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
