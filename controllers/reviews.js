const Anime = require("../models/anime")

module.exports = {
    create,
    delete: deleteOne,
    update
}

async function create(req, res) {
    const anime = await Anime.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    anime.reviews.push(req.body);
    try {
        await anime.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/animes/${anime._id}`);
}

async function deleteOne(req, res) {
    const anime = await Anime.findOne({
        'reviews._id': req.params.id,
        'reviews.user': req.user._id
    });
    if (!anime) return res.redirect('/animes');
    anime.reviews.remove(req.params.id);
    await anime.save();
    res.redirect(`/animes/${anime._id}`)
}

async function update(req, res) {
    const anime = await Anime.findOne({ 'reviews._id': req.params.id });
    const reviewSubdoc = anime.reviews.id(req.params.id);
    if (!reviewSubdoc.user.equals(req.user._id)) return res.redirect(`/animes/${anime._id}`);
    reviewSubdoc.content = req.body.content;
    reviewSubdoc.judgement = req.body.judgement;
    try {
        await anime.save();
    } catch (err) {
        console.log(err.message);
    }
    res.redirect(`/animes/${anime._id}`);
}