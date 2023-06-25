const mongoose = require('mongoose');



const PriceModel = new mongoose.Schema({
    price: Number
});


module.exports = mongoose.model("price", PriceModel)