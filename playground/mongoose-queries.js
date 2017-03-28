const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

var id = '58d9cf94e524bb3a9856b06711';
var idUser = '58d86d1fe7481d0fb4065ab9';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then(function(todos) {
// 	console.log('Todos ' + todos);
// });

// Todo.findOne({
// 	_id: id
// }).then(function(todo) {
// 	console.log('Todos ' + todo);
// });

// Todo.findById(id).then(function(todo) {
// 	if (!todo) {
// 		return console.log('ID not found');
// 	}
// 	console.log("Todo by id: " + todo);
// }).catch(function(err) {
// 	// console.log(err);
// });

User.findById(idUser).then(function(user) {
	if (!user) {
		return console.log('User not found');
	}
	console.log('Found the user ' + user._id);
});