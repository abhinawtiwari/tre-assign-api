const express = require('express');
const router = express.Router();
const Feed = require('../models/Feed');

router.get('/', async (req, res) => {
    try {
        const feeds = await Feed.find();
        res.json(feeds);
    } catch(err) {
        res.json({message: err});
    }
})

router.post('/', async (req, res) => {
    const feed = new Feed({
        name: req.body.name,
        description: req.body.description
    });

    try {
        const data = await feed.save();
        res.json(data);
    } catch(err) {
        res.json({ message: err });
    }
});

module.exports = router;