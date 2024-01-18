const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: { type: String, required: true},
    judgement: { type: String, enum: ['S-Tier', 'A-Tier', 'B-Tier', 'C-Tier', 'D-Tier'], default: 'S-Tier', required: true},
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const animeSchema = new Schema({
    title: { type: String, required: true },
    genre: { 
        type: String, 
        enum: ['Shonen', 'Seinen', 'Isekai', 'Mecha', 'Slice of Life', 'Indie'],
        required: true 
    },
    releaseYear: {
        type: Number,
        default: function() {
            return new Date().getFullYear();
        },
        min: 1975
    },
    description: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    reviews: [reviewSchema],
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Anime', animeSchema);