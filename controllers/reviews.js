const Anime = require("../models/anime")

module.exports = {
    create,
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