const express = require("express");
const {
    COINBASE_API_KEY,
    COINBASE_WEBHOOK_SECRET,
    DOMAIN
} = require('./config')
const {Client, resources} = require('coinbase-commerce-node')

Client.init(COINBASE_API_KEY)

const {Charge} = resources

const app = express();

app.get('/create-charge', (req, res) => {

    const chargeData = {
        name: 'Sound Effect',
        description: 'An beautiful relax music sound effect',
        local_price: {
            amount: ''
        }
    }
})
Charge.create()

app.listen(4000);
console.log("server on port", 4000);