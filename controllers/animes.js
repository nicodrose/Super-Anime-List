const Anime = require('../models/anime');

module.exports = {
    index,
}

async function index(req, res) {
    const animes = await Anime.find({});
    res.render('animes/index', { title: 'Anime List', animes});
}