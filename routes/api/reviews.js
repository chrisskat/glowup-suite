const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', reviewsCtrl.index);
router.get('/new', ensureLoggedIn, reviewsCtrl.new); 
router.post('/', ensureLoggedIn, reviewsCtrl.create);
router.get('/:id', reviewsCtrl.show);
router.get('/:id/edit', ensureLoggedIn, reviewsCtrl.edit);
router.put('/', ensureLoggedIn, reviewsCtrl.update);
router.delete('/:id', ensureLoggedIn, reviewsCtrl.delete);

// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

// router.get('/api/reviews', reviewsCtrl.getAll);
// router.post('/api/reviews', ensureLoggedIn, reviewsCtrl.addReview);

module.exports = router;
