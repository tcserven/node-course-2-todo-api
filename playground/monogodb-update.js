// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// takes 2 arguemnts, 1st is string. url where DB exists. for production, this would be heroku or whatever. 2nd is callback. 
// after 27017 we need to specify which DB to connect to. test is given by default. 
MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	
	// db.collection('Todos').findOneAndUpdate({ 
	// 	_id: new ObjectID('58d7ec48544eac583f761dec')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then(function(result) {
	// 	console.log(result);
	// }); 

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('58d6dd9dd1fad02114cbf263')
	}, {
		$set: {
			name: 'Bob'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then(function(result) {
		console.log(result);
	});


	// closes connection with mongodb server
	// db.close();
});