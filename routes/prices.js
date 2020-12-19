const express = require('express');
const router = express.Router();
const Price = require('../models/Price');

router.get('/', async (req, res) => {
    try {
        const prices = await Price.find();
        res.json(prices);
    } catch(err) {
        res.json({message: err});
    }
})

router.post('/', async (req, res) => {
    const price = new Price({
        month: req.body.month,
        value: req.body.value
    });

    try {
        const data = await price.save();
        res.json(data);
    } catch(err) {
        res.json({ message: err });
    }
});

module.exports = router;