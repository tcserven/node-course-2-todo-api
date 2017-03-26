// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// here were just in a way stealing the objectID generator that mongoDB uses to make our own unique IDs
// var obj = new ObjectID();
// console.log(obj);

// variable destructuring aside
// var user = {name: 'Thomas', age: 25};
// var {name} = user;
// console.log(name);


// takes 2 arguemnts, 1st is string. url where DB exists. for production, this would be heroku or whatever. 2nd is callback. 
// after 27017 we need to specify which DB to connect to. test is given by default. 
MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// creating a collection
	// db.collection('Todos').insertOne({
	// 	text: 'Soemthing to do',
	// 	completed: false
	// }, function(err, result) {
	// 	if (err) {
	// 		console.log('Unable to insert todo', err);
	// 	} else {
	// 		console.log(JSON.stringify(result.ops, undefined, 2));
	// 	}
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Thomas',
	// 	age: 156,
	// 	location: 'Toronto'
	// }, function(err, result) {
	// 	if (err) {
	// 		return console.log('Unable to insert user', err);
	// 	}
	// 	console.log(result.ops[0]._id.getTimestamp());

	// });

	// closes connection with mongodb server
	db.close();
});