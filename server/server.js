// moved to mongoose.js
// var mongoose = require('mongoose');

// library imports
var express = require('express'),
	bodyParser = require('body-parser'),
	_ = require('lodash');



// local imports
// // tell mongoose to use the JS promises, not some 3rd promise library
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
// These names match the files as to what were exporting
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectID} = require('mongodb');

var app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());

// create route
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

// index route
app.get('/todos', function(req, res) {
	Todo.find().then(function(todos) {
		res.send({
			todos: todos
		});
	}, function(err) {
		res.status(400).send(err);
	});
});

// show route?
app.get('/todos/:id', function(req, res) {
	// res.send(req.params.id);
	var id = req.params.id;

	if(!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findById(id).then(function(todo) {
		if (!todo) {
			return res.status(404).send();
		}
		// res.send(todo);
		res.send({todo:todo});
		// res.send('Found the user ' + todo._id);
	}).catch(function(err) {
		res.status(400).send();
	});
});

app.delete('/todos/:id', function(req, res) {
	// get the id
	var id = req.params.id;
	// validate the id
	if(!ObjectID.isValid(id)) {
		return res.status(404).send("not working 1");
		// return res.sendStatus(404);
	}

	// remove todo by id
	Todo.findByIdAndRemove(id).then(function(todo) {
		if (!todo) {
			return res.status(404).send("not working 2222");
		}

		res.send({todo});
	}).catch(function(err) {
		res.status(400).send("not working catch");
	});

});

app.patch('/todos/:id', function(req, res) {
	var id = req.params.id;
	// method picks specific properties that the user is allowed to update
	var body = _.pick(req.body, ['text', 'completed']);

	if(!ObjectID.isValid(id)) {
		return res.status(404).send("not working 1");
		// return res.sendStatus(404);
	}

	if (_.isBoolean(body.completed) && body.completed) {
		body.completedAt = new Date().getTime();
	} else {
		body.completed = false;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then(function(todo) {
		if (!todo) {
			return res.status(404).send();
		}
		res.send({todo: todo});

	}).catch(function(err) {
		res.status(400).send();
	});

});

// POST users
app.post('/users', function(req, res) {
	var body = _.pick(req.body, ['email', 'password']);
	var user = new User(body);



	user.save().then(function(user) {
		return user.generateAuthToken();
		// res.send(user);
	}).then(function(token) {
		res.send(user);
	}).catch(function(err) {
		res.status(400).send(err);
	});
});

app.listen(port, function() {
	console.log("Server has started on port " + port);
});

// for testing stuff
module.exports = {
	app:app
};










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