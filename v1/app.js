var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

var campgrounds= [
  {name: 'Salmon Creek', image: 'https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg'},
  {name: 'Granite Hill', image: 'https://farm5.staticflickr.com/4123/4943676109_b93d9c1203.jpg'},
  {name: 'Muskoka', image: 'https://farm4.staticflickr.com/3895/15030126225_9ef5b51e4a.jpg'}
];

app.get('/', function(req, res) {
  res.render('landing');
});

app.get('/campgrounds', function(req, res) {
  res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res) {
  res.render('new.ejs');
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is listening!");
});


// mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true})

// mongoose.Promise = global.Promise;
