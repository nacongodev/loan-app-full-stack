const Payment = require('../models/paymentModel');
const Loan = require('../models/loanModel');
const stripe = require('stripe')('your_stripe_secret_key');

// Initiate a payment
exports.initiatePayment = async (req, res) => {
    try {
        const { loanId, amount } = req.body;
        const payment = new Payment({ loanId, amount });
        await payment.save();
        res.status(201).send('Payment initiated');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Process a payment
exports.processPayment = async (req, res) => {
    try {
        const { paymentId, token } = req.body;
        const payment = await Payment.findById(paymentId);
        if (!payment) {
            return res.status(404).send('Payment not found');
        }

        const charge = await stripe.charges.create({
            amount: payment.amount * 100, // amount in cents
            currency: 'usd',
            source: token,
            description: `Payment for loan ${payment.loanId}`
        });

        payment.status = 'Completed';
        payment.transactionId = charge.id;
        await payment.save();

        const loan = await Loan.findById(payment.loanId);
        loan.amount -= payment.amount;
        await loan.save();

        res.status(200).send('Payment processed successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Confirm a payment
exports.confirmPayment = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) {
            return res.status(404).send('Payment not found');
        }
        res.status(200).send(payment);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
