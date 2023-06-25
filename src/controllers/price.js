const { default: mongoose } = require('mongoose');
const price = require('../models/price');
const PriceModel = require('../models/price')



const getPrice = async(req,res)=> {
    try {
        const price = await PriceModel.find();
        res.json({
            data: price
        })
    } catch (error) {
        console.log(error)
    }
}

const updatePrice = async(req,res)=>{
    try{
        const bodyPrice = req.body.price;
        const price = await PriceModel.findByIdAndUpdate({
            _id: '6492f7dbdbd291af24acd3e5'
        }, {
            $set: {
                price: bodyPrice
            }
        })
        
        res.json({
            data: price
        })
    }catch(error){
        console.log(error)
    }
}

// const createprice = async(req,res)=>{
//     try {
        
//         const priceSave = await PriceModel.create({
//             price: req.body.price
//         });
//         res.json({
//             data: priceSave
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }



module.exports = {
    // createprice,
    updatePrice,
    getPrice
}