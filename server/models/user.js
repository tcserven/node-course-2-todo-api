var mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
	email: {
		required: true,
		trim: true,
		type: String,
		minLength: 1,
		unique: true,
		validate: {
			// this returns either true or false. 
			validator: function(value) {
				return validator.isEmail(value);
			},
			message: '{Value} is not a valid email'
		},
	},
	password: {
		type: String,
		required: true,
		minlength: 6
	},
	tokens: [{
		access: {
			type: String,
			required: true
		},
		token: {
			type: String,
			required: true
		}
	}]
});

UserSchema.methods.generateAuthToken = function() {
	var user = this;
	var access = 'auth';
	var token = jwt.sign({_id: user.id.toHexString(), access: 'auth'}, 'abc123');

	user.token.push({
		access: access,
		token: token
	});

	return user.save().then(function() {
		return token;
	});
};

// user model
var User = mongoose.model('User', UserSchema);


module.exports = {
	User: User
};