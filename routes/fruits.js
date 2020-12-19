const express = require('express');
const router = express.Router();
const Fruit = require('../models/Fruit');

router.get('/', async (req, res) => {
    try {
        const fruits = await Fruit.find();
        res.json(fruits);
    } catch(err) {
        res.json({message: err});
    }
})

router.post('/', async (req, res) => {
    const fruit = new Fruit({
        name: req.body.name,
        price: req.body.price
    });

    try {
        const data = await fruit.save();
        res.json(data);
    } catch(err) {
        res.json({ message: err });
    }
});

module.exports = router;