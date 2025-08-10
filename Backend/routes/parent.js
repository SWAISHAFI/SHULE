const express = require('express');
const router = express.Router();
const Parent = require('../models/Parent');

// Get all parents
router.get('/', async (req, res) => {
    try {
        const parents = await Parent.find();
        res.json(parents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add parent
router.post('/', async (req, res) => {
    const parent = new Parent(req.body);
    try {
        const newParent = await parent.save();
        res.status(201).json(newParent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
