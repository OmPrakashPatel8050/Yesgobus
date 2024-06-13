const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let wallet = {
    balance: 100.0 // Initial balance
};

// Endpoint to get the current balance
app.get('/api/wallet/balance', (req, res) => {
    res.json(wallet);
});

// Endpoint to add funds to the wallet
app.put('/api/wallet/balance', (req, res) => {
    const amount = parseFloat(req.body.amount);
    if (!isNaN(amount) && amount >= 0) {
        wallet.balance = amount;
        res.json(wallet);
    } else {
        res.status(400).json({ error: 'Invalid amount' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
