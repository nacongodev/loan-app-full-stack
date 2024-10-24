const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).send('Invalid credentials');
        }
        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.passwordReset = async (req, res) => {
    try {
        const { username, newPassword } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).send('User not found');
        }
        user.password = newPassword;
        await user.save();
        res.status(200).send('Password reset successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
