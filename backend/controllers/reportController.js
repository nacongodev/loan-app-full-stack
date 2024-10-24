const Loan = require('../models/loanModel');
const Payment = require('../models/paymentModel');
const User = require('../models/userModel');

// Controller to generate loan summary report
exports.loanSummary = async (req, res) => {
    try {
        const loans = await Loan.aggregate([
            {
                $group: {
                    _id: null,
                    totalLoans: { $sum: 1 },
                    totalAmount: { $sum: '$amount' },
                    averageInterestRate: { $avg: '$interestRate' }
                }
            }
        ]);
        res.status(200).send(loans[0]); // Send the loan summary report
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong
    }
};

// Controller to generate payment history report
exports.paymentHistory = async (req, res) => {
    try {
        const payments = await Payment.find({ userId: req.user.userId }).populate('loanId');
        res.status(200).send(payments); // Send the payment history report
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong
    }
};

// Controller to generate user activity report
exports.userActivity = async (req, res) => {
    try {
        const users = await User.aggregate([
            {
                $lookup: {
                    from: 'loans',
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'loans'
                }
            },
            {
                $lookup: {
                    from: 'payments',
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'payments'
                }
            },
            {
                $project: {
                    username: 1,
                    loanCount: { $size: '$loans' },
                    paymentCount: { $size: '$payments' }
                }
            }
        ]);
        res.status(200).send(users); // Send the user activity report
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong
    }
};
