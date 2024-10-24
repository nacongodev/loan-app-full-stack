// server.js
const express = require('express');
const dotenv = require('dotenv');
const app = express();

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Loan Application Routes
app.post('/loan/apply', (req, res) => {
    // Logic for submitting a loan application
});

app.get('/loan/review/:id', (req, res) => {
    // Logic for reviewing a loan application
});

app.post('/loan/approve/:id', (req, res) => {
    // Logic for approving a loan application
});

app.get('/', (req, res) => {
  res.send('Loan Management App');
});

app.listen(port, () => {
  console.log(`Server running on port ${port} in ${env} mode`);
});

