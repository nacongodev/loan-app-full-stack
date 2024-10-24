const Loan = require('../models/loanModel');

// Submit a loan application
exports.submitLoanApplication = async (req, res) => {
    try {
        const loan = new Loan(req.body);
        await loan.save();
        res.status(201).send('Loan application submitted');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Review a loan application
exports.reviewLoanApplication = async (req, res) => {
    try {
        const loan = await Loan.findById(req.params.id);
        if (!loan) {
            return res.status(404).send('Loan application not found');
        }
        res.status(200).send(loan);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// Approve a loan application
exports.approveLoanApplication = async (req, res) => {
    try {
        const loan = await Loan.findById(req.params.id);
        if (!loan) {
            return res.status(404).send('Loan application not found');
        }
        loan.status = 'Approved';
        await loan.save();
        res.status(200).send(`Application ${req.params.id} approved`);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
