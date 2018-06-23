const express = require('express')
const app = express()
const mongoose = require('mongoose');
var exphbs = require('express-handlebars');

mongoose.connect('mongodb://localhost/rotten-potatoes', { useMongoClient: true });

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// OUR MOCK ARRAY OF PROJECTS
let reviews = [
  { title: "Great Review" },
  { title: "Awesome Review" },
  { title: "Next Review" }
]

app.get('/', (req, res) => {
  res.render('reviews-index', { reviews: reviews });
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
