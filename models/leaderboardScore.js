const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    score: {
        type: Number,
        required: true,
        min: 0,
        max: 10000
    },
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Score = mongoose.model('Score', scoreSchema);
module.exports = Score;