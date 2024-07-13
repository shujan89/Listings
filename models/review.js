const { types } = require('joi');
const mongoose = require('mongoose');
const { create } = require('./listing');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: {
        type: String
    },
    rating: {
        type: Number,
        min: 1,
        mex: 5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Review", reviewSchema);