var mongoose = require('mongoose');

// user model
var User = mongoose.model('User', {
	email: {
		required: true,
		trim: true,
		type: String,
		minLength: 1
	}
});


module.exports = {
	User: User
};