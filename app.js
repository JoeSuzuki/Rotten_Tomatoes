const express = require('express')
const app = express()
const mongoose = require('mongoose');
var exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/rotten-tomatoes', { useMongoClient: true });

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));

const Review = mongoose.model('Review', {
  title: String
});

// let reviews = [
//   { title: "Great Review" },
//   { title: "Awesome Review" },
//   { title: "Next Review" }
// ]

app.get('/', (req, res) => {
  Review.find().then((reviews) => {
    res.render('reviews-index', {reviews: reviews});
  }).catch((err) => {
    console.log(err);
  })
})

app.post('/reviews', (req, res) => {
  Review.create(req.body).then((review) => {
    console.log(review);
    res.redirect('/');
  }).catch((err) => {
    console.log(err.message);
  })
})

app.get('/reviews/new', (req, res) => {
  res.render('reviews-new', {});
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
