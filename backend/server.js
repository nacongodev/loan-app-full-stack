// server.js
const express = require('express');
const dotenv = require('dotenv');
const loanRoutes = require('./routes/loanRoutes');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const accountRoutes = require('./routes/accountRoutes');
const roleRoutes = require('./routes/roleRoutes');
const tenantRoutes = require('./routes/tenantRoutes');
const reportRoutes = require('./routes/reportRoutes');
const app = express();

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
// Use the account routes
app.use('/account', accountRoutes);

// Use the role routes
app.use('/roles', roleRoutes);
// Use the tenant routes
app.use('/tenants', tenantRoutes);

app.use('/auth', authRoutes);
// Loan Application Routes
app.use('/loan', loanRoutes);
// Use the report routes
app.use('/reports', reportRoutes);

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

