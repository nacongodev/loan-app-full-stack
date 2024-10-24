const User = require('../models/userModel');
const Transaction = require('../models/transactionModel');

// Controller to get user profile
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId); // Find the user by ID
        if (!user) {
            return res.status(404).send('User not found'); // Send an error response if user not found
        }
        res.status(200).send(user); // Send the user profile as the response
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong
    }
};

// Controller to update user profile
exports.updateProfile = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.user.userId, req.body, { new: true }); // Update the user profile
        if (!user) {
            return res.status(404).send('User not found'); // Send an error response if user not found
        }
        res.status(200).send(user); // Send the updated user profile as the response
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong
    }
};

// Controller to get transaction history
exports.getTransactionHistory = async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.user.userId }); // Find transactions by user ID
        res.status(200).send(transactions); // Send the transaction history as the response
    } catch (error) {
        res.status(400).send(error.message); // Send an error response if something goes wrong
    }
};
