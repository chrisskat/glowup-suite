const Review = require('../models/review');

module.exports = {
  index,
  new: newReview,
  create,
  show,
  edit,
  update,
  delete: deleteReview
};

async function index(req, res) {
  try {
    const reviews = await Review.find({});
    res.render('reviews/index', { reviews });
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
}

function newReview(req, res) {
  res.render('reviews/new');
}

async function create(req, res) {
  req.body.author = req.user._id;
  const review = new Review(req.body);
  try {
    await review.save();
    res.redirect(`/reviews/${review._id}`);
  } catch (err) {
    console.log(err);
    res.render('reviews/new');
  }
}

async function show(req, res) {
  try {
    const review = await Review.findById(req.params.id)
      .populate('author')
      .exec();
    res.render('reviews/show', { review });
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
}

async function edit(req, res) {
  try {
    const review = await Review.findById(req.params.id);
    if (!review.author.equals(req.user._id)) {
      return res.redirect(`/reviews/${req.params.id}`);
    }
    res.render('reviews/edit', { review });
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
}

async function update(req, res) {
  try {
    const review = await Review.findById(req.params.id);
    if (!review.author.equals(req.user._id)) {
      return res.redirect(`/reviews/${req.params.id}`);
    }
    review.title = req.body.title;
    review.body = req.body.body;
    await review.save();
    res.redirect(`/reviews/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
}

async function deleteReview(req, res) {
  try {
    const review = await Review.findById(req.params.id);
    if (!review.author.equals(req.user._id)) {
      return res.redirect(`/reviews/${req.params.id}`);
    }
    await review.remove();
    res.redirect('/reviews');
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
}
