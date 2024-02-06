const express = require('express');
const Product = require('../models/product');
const router = express.Router();

router.get('', async function(req, res) {
    try {
        const foundProducts = await Product.find({});
        return res.json(foundProducts);
    } catch (err) {
        // Handle the error
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:productId', async function(req, res) {
    try {
        const foundProducts = await Product.findById(req.params.productId);
        return res.json(foundProducts);
    } catch (err) {
        // Handle the error
        console.error(err);
        return res.status(422).json({ error: [{title: 'Product error', detail: 'Product not found!'}] });
    }
});
module.exports = router;