const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animeSchema = new Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    releaseYear: {
        type: Number,
        default: function() {
            return new Date().getFullYear();
        },
        min: 1975
    },
    description: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Anime', animeSchema);