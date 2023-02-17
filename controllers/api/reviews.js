const Review = require('../../models/review');

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
    res.json(reviews);
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
}

function newReview(req, res) {
  res.render('reviews/new');
}

async function create(req, res) {
  req.body.review.user = req.user._id;
  console.log(req.body)
  const review = new Review(req.body.review);
  try {
    await review.save();
    // res.redirect(`/reviews/index`);
    res.json(review)
  } catch (err) {
    console.log(err)
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
  Review.findById(req.body._id, (err, foundReview) => {
    if (err) {
      console.log(err)
    }
    res.json(foundReview)
  })
  // try {
  //   const review = await Review.findById(req.params.id);
  //   if (!review.author.equals(req.user._id)) {
  //     return res.redirect(`/reviews/${req.params.id}`);
  //   }
  //   res.render('reviews/edit', { review });
  // } catch (err) {
  //   console.log(err);
  //   res.redirect('/');
  // }
}

async function update(req, res) {
  Review.findByIdAndUpdate(
    req.body.id,
    req.body,
    {
      new: true,
    },
    (err, updatedReview) => {
      res.json(updatedReview)
    }
  )
  // try {
  //   const review = await Review.findById(req.params.id);
  //   if (!review.author.equals(req.user._id)) {
  //     return res.redirect(`/reviews/${req.params.id}`);
  //   }
  //   review.title = req.body.title;
  //   review.body = req.body.body;
  //   await review.save();
  //   res.redirect(`/reviews/${req.params.id}`);
  // } catch (err) {
  //   console.log(err);
  //   res.redirect('/');
  // }
}

async function deleteReview(req, res) {
  try {
    const review = await Review.findById(req.params.id);
    // if (!review.author.equals(req.user._id)) {
    //   return res.redirect(`/reviews/${req.params.id}`);
    // }
    await review.remove();
    res.json('deleted')
    // res.redirect('/reviews');
  } catch (err) {
    console.log(err);
    // res.redirect('/');
  }
}
