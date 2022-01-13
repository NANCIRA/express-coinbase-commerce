const express = require("express");
const {
    COINBASE_API_KEY,
    COINBASE_WEBHOOK_SECRET,
    DOMAIN
} = require('./config')

console.log(COINBASE_API_KEY,COINBASE_WEBHOOK_SECRET,DOMAIN)

const app = express();

app.listen(4000);
console.log("server on port", 4000);