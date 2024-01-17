const express = require('express');
const router = express.Router();
const animesCtrl = require('../controllers/animes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/animes'
// GET /animes (index)
router.get('/', animesCtrl.index);
// GET /animes/new (new functionality/controller action)
router.get('/new', ensureLoggedIn, animesCtrl.new);
// POST /animes (create functionality/controller action)
router.post('/', ensureLoggedIn, animesCtrl.create);
// GET /animes/:id (show functionality/controller action) - MUST be below 'new' route
router.get('/:id', animesCtrl.show);

module.exports = router;
