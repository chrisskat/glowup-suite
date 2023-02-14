const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', reviewsCtrl.index);
router.get('/new', isLoggedIn, reviewsCtrl.new);
router.post('/', isLoggedIn, reviewsCtrl.create);
router.get('/:id', reviewsCtrl.show);
router.get('/:id/edit', isLoggedIn, reviewsCtrl.edit);
router.put('/:id', isLoggedIn, reviewsCtrl.update);
router.delete('/:id', isLoggedIn, reviewsCtrl.delete);

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
