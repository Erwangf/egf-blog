const mongoose = require('mongoose');
// maybe I should put these in a separated file ?
const databaseAccess = {
    user: "server",
    password: "debug123",
    url: "ds227740.mlab.com:27740/egf-blog"
};
connectionURL = 'mongodb://'
    + databaseAccess.user + ':'
    + databaseAccess.password + '@'
    + databaseAccess.url;
mongoose.connect(connectionURL);


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Successfully connected to "+databaseAccess.url);
});


module.exports = mongoose;