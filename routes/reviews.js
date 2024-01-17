const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /animes/:id/reviews (create functionality/controller action, create review for a movie)
router.post('/animes/:id/reviews', ensureLoggedIn, reviewsCtrl.create);
// DELETE /reviews/:id (delete functionality/controller action)
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);
// GET /reviews/:id/edit (edit functionality/controller action)
router.get('reviews/:id', ensureLoggedIn, reviewsCtrl.edit);
// PUT /reviews/:id (update functionality/controller action)

module.exports = router;