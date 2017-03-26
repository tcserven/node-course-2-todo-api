// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// takes 2 arguemnts, 1st is string. url where DB exists. for production, this would be heroku or whatever. 2nd is callback. 
// after 27017 we need to specify which DB to connect to. test is given by default. 
MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find({_id: new ObjectID('58d6dc7b54de4a0604fc152d')}).toArray().then(function(docs) {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, function(err) {
	// 	if (err) {
	// 		console.log('Unable to fetch todos', err);
	// 	}
	// });

	db.collection('Todos').find().count().then(function(count) {
		console.log('Todos count: ' + count);
	}, function(err) {
		if (err) {
			console.log('Unable to fetch todos', err);
		}
	});

	db.collection('Users').find({name: 'Thomas'}).toArray().then(function(count) {
		console.log('Users: ' + JSON.stringify(count, undefined, 2));
	}, function(err) {
		if (err) {
			console.log('Unable to fetch todos', err);
		}
	});


	// closes connection with mongodb server
	// db.close();
});