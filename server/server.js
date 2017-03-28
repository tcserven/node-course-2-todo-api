// moved to mongoose.js
// var mongoose = require('mongoose');

// library imports
var express = require('express'),
	bodyParser = require('body-parser');



// local imports
// // tell mongoose to use the JS promises, not some 3rd promise library
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
// These names match the files as to what were exporting
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();


app.use(bodyParser.json());


app.post('/todos', function(req, res) {
	// console.log(req.body);
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then(function(doc) {
		res.send(doc);
	}, function(err) {
		res.status(400).send(err);
	});
});





app.listen(3000, function() {
	console.log("Server has started on port 3000");
});










// // Todo model
// var Todo = mongoose.model('Todo', {
// 	text: {
// 		type: String,
// 		required: true,
// 		minLength: 1,
// 		trim: true
// 	}, 
// 	completed: {
// 		type: Boolean,
// 		default: false
// 	},
// 	completedAt: {
// 		type: Number,
// 		default: null
// 	}
// });

// // user model
// var User = mongoose.model('User', {
// 	email: {
// 		required: true,
// 		trim: true,
// 		type: String,
// 		minLength: 1
// 	}
// });

// creating a new instance of our model. 
// var newTodo = new Todo({
// 	text: 'Cook dinner'
// });


// // saving it to DB. 
// newTodo.save().then(function(doc) {
// 	console.log('Saved todo ', doc);
// }, function(err) {
// 	console.log('Unable to save todo');
// });


// Exercise
// var otherTodo = new Todo({
// 	text: 'Cook ham',
// 	completed: false,
// 	completedAt: 123
// });

// otherTodo.save().then(function(doc) {
// 	console.log(JSON.stringify(doc, undefined, 2));
// }, function(err) {
// 	console.log('Unable to save todo', err);
// });

// var user = new User({
// 	email: '  haoth@ogm.com   '
// });

// user.save().then(function(doc) {
// 	console.log('User saved ' + doc);
// }, function(err) {
// 	console.log(err);
// });