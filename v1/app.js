var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is listening!");
});
