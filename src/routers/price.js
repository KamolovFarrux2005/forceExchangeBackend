const priceController = require("../controllers/price");
const router = require('express').Router();



router.get("/", async(req,res)=> await priceController.getPrice(req,res));

// router.post('/', async(req,res)=> await priceController.createprice(req,res));

router.put('/', async(req,res)=> await priceController.updatePrice(req,res));
module.exports = router;