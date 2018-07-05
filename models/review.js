const mongoose = require('mongoose')

const Review = mongoose.model('Review', {
  title: String,
  description: String,
  movieTitle: String
});

// let reviews = [
//   { title: "Great Review" },
//   { title: "Awesome Review" },
//   { title: "Next Review" }
// ]

module.exports = Review
