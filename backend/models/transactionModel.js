const mongoose = require('mongoose');

// Define the schema for transactions
const transactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user
    loanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Loan' }, // Reference to the loan
    amount: Number, // Transaction amount
    date: { type: Date, default: Date.now } // Transaction date
});

// Create the Transaction model from the schema
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
