const mongoose = require("mongoose");



const OrderModel = new mongoose.Schema({
    usdtPrice: String,
    name: String, 
    address: String,
    telAndUsername: String,
    usdtTotal: String,
    uzsTotal: String
})

module.exports = mongoose.model("Order", OrderModel);