const express = require('express');
const router = express.Router();
const animesCtrl = require('../controllers/animes');

// All routes start with /animes
// GET /animes
router.get('/', animesCtrl.index);










module.exports = router;
