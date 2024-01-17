const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /animes/:id/reviews (create functionality/controller action, create review for a movie)
router.post('/animes/:id/reviews', ensureLoggedIn, reviewsCtrl.create);
// DELETE /reviews/:id (delete functionality/controller action)
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);

module.exports = router;