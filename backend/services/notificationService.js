const nodemailer = require('nodemailer');

// Function to send a notification
exports.sendNotification = async (notification) => {
    // Configure the email transport using nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your_email@gmail.com',
            pass: 'your_email_password'
        }
    });

    // Define the email options
    const mailOptions = {
        from: 'your_email@gmail.com',
        to: 'recipient_email@gmail.com', // Replace with the recipient's email
        subject: 'Notification from Loan Management System',
        text: notification.message
    };

    // Send the email
    await transporter.sendMail(mailOptions);
};
