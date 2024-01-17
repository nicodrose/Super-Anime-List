const Anime = require('../models/anime');

module.exports = {
    index,
    new: newAnime,
    create
}

async function index(req, res) {
    const animes = await Anime.find({});
    res.render('animes/index', { title: 'Anime List', animes});
}

function newAnime(req, res) {
    res.render('animes/new', { title: 'Add Anime', errorMsg: '' });
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        await Anime.create(req.body);
        res.redirect('/animes');
    } catch (err) {
        console.log(err);
        res.render('animes/new', { errorMsg: err.message });
    }
}