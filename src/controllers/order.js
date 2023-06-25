const OrderModel = require("../models/order.model");


const getAllOrder = async(req,res) =>  {
    try {
        const allOrder = await OrderModel.find();
        res.json({
            data: allOrder
        })
    } catch (error) {
        console.log(error.message)
    }
}


const deleteOrder = async(req,res)=>{
    try{
        const id = req.params.id;
        await OrderModel.findByIdAndDelete({_id: id});
        res.json({
            data: `Deleted order ${id}`
        });
    }catch(error){
        console.log(error.message)
    }
}


module.exports = {
    getAllOrder,
    deleteOrder
}