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
        description: 'A beautiful relax music sound effect',
        local_price: {
            amount: '0.2',
            currency: 'USD'
        },
        pricing_type: 'fixed_price',
        metadata: {
            customer_id: 'id_234',
            customer_name: 'Rose Crill'
        },
        redirect_url: '${DOMAIN}/sucess-payment',
    }

    Charge.create()

})

app.get('/sucess-payment', (req, res) => {
    res.send('Payment successfull')
})

app.listen(4000);
console.log("server on port", 4000);