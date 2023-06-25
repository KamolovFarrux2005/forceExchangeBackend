const express = require("express");
const app = express();
const cors = require('cors');
const OrderRouter = require("./routers/order");
const PriceRouter = require("./routers/price")
require("dotenv").config();
require('./config/DB')();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors("*"));


app.use('/api/order', OrderRouter);
app.use('/api/price', PriceRouter)


const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`PORT LISTENER: ${PORT}`)
})