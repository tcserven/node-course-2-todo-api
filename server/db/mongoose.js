var mongoose = require('mongoose');

// tell mongoose to use the JS promises, not some 3rd promise library
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
	mongoose: mongoose
};																																																																														