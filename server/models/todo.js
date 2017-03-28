var mongoose = require('mongoose');

// Todo model
var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minLength: 1,
		trim: true
	}, 
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

module.exports = {
	Todo: Todo
};