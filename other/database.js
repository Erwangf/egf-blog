var mongoose = require('mongoose');
mongoose.connect('mongodb://server:debug123@ds227740.mlab.com:27740/egf-blog');
console.log("Hello !");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connexion réussie");
});





module.exports = mongoose;