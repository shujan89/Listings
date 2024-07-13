const express = require("express");
const router = express.Router();

// index route
router.get('/', (req, res) => {
    res.send("GET for user");
});

// show route
router.get('/:id', (req, res) => {
    res.send("GET for show user id");
});

// POST route
router.post('/', (req, res) => {
    res.send("POST for show user");
});

// Delete route
router.delete('/:id', (req, res) => {
    res.send("delete for show user");
});

module.exports = router;