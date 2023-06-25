const router = require('express').Router();
const controller = require("../controllers/order")

router.get('/orders', async(req,res)=>{
    await controller.getAllOrder(req,res);
})

router.post('/orders', async(req,res)=>{
    await controller.createOrder(req,res);
})

router.delete('/orders/:id', async(req,res)=>{
    await controller.deleteOrder(req,res)
})



module.exports = router