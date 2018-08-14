var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/DeVVil');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to the server");
});
module.exports=mongoose;