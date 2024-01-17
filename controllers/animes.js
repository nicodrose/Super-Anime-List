const Anime = require('../models/anime');

module.exports = {
    index,
    new: newAnime
}

async function index(req, res) {
    const animes = await Anime.find({});
    res.render('animes/index', { title: 'Anime List', animes});
}

function newAnime(req, res) {
    res.render('animes/new', { title: 'Add Anime', errorMsg: '' });
}