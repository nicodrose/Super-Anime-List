const express = require('express');
const router = express.Router();
const animesCtrl = require('../controllers/animes');

// All routes start with '/animes'
// GET /animes (index)
router.get('/', animesCtrl.index);
// GET /animes/new (new functionality/controller action)
router.get('/new', animesCtrl.new);









module.exports = router;
