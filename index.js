const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
// Endpoint 1
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseInt(req.query.quantity);
  let totalReturn = (marketPrice - boughtAt) * quantity;
  res.send(totalReturn.toString());
});

// Endpoint 2
app.get('/total-returns', (req, res) => {
  let stock1 = parseInt(req.query.stock1);
  let stock2 = parseInt(req.query.stock2);
  let stock3 = parseInt(req.query.stock3);
  let stock4 = parseInt(req.query.stock4);
  let totalReturns = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturns.toString());
});

// Endpoint 3
app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  let totalReturnPercentage = (returns / boughtAt) * 100;
  res.send(totalReturnPercentage.toString());
});

// Endpoint 4
app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let totalReturns = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturns.toString());
});

// Endpoint 5
app.get('/status', (req, res) => {
  let returnPercentage = parseInt(req.query.returnPercentage);
  let result;
  if (returnPercentage > 0) {
    result = 'profit';
  } else {
    result = 'loss';
  }
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
