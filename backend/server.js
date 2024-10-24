// server.js
const express = require('express');
const dotenv = require('dotenv');
const loanRoutes = require('./routes/loanRoutes');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const accountRoutes = require('./routes/accountRoutes');

const app = express();

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
// Use the account routes
app.use('/account', accountRoutes);

app.use('/auth', authRoutes);
// Loan Application Routes
app.use('/loan', loanRoutes);

app.use('/payment', paymentRoutes);
app.get('/', (req, res) => {
  res.send('Loan Management App');
});

// Use the account routes
app.use('/account', accountRoutes);
mongoose.connect('mongodb://localhost:27017/loan_management', {
    
});

app.listen(port, () => {
  console.log(`Server running on port ${port} in ${env} mode`);
});

