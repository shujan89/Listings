const express = require("express");
const router = express.Router();

// posts route
router.get('/', (req, res) => {
    res.send("GET for posts");
});

// show route
router.get('/:id', (req, res) => {
    res.send("GET for show posts id");
});

// POST route
router.post('/', (req, res) => {
    res.send("POST for show posts");
});

// Delete route
router.delete('/:id', (req, res) => {
    res.send("delete for show posts");
});

module.exports = router;