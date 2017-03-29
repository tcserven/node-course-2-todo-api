var mongoose = require('mongoose');

// tell mongoose to use the JS promises, not some 3rd promise library
mongoose.Promise = global.Promise;

// connecting to mlab here
var db = {
	localhost: 'mongodb://localhost:27017/TodoApp',
	mlab: 'mongodb://user:user@ds145380.mlab.com:45380/section-7-app'
};

mongoose.connect(process.env.PORT ? db.mlab : db.localhost);

module.exports = {
	mongoose: mongoose
};