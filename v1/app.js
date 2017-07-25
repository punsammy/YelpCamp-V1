var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('landing');
});

app.get('/campgrounds', function(req, res) {
  var campgrounds= [
    {name: 'Salmon Creek', image: 'https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg'},
    {name: 'Granite Hill', image: 'https://farm5.staticflickr.com/4123/4943676109_b93d9c1203.jpg'},
    {name: 'Muskoka', image: 'https://farm4.staticflickr.com/3895/15030126225_9ef5b51e4a.jpg'}
  ]

  res.render('campgrounds', {campgrounds: campgrounds});
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is listening!");
});
