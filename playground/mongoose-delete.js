const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// .remove
// Todo.remove({}).then(function(result) {
// 	console.log(result);
// });

// findoneandremove
Todo.findOneAndRemove().then(function(result) {

});

// findbyidandremove
Todo.findByIdAndRemove('58dc438504e13db0ee57e23b').then(function(todo) {
	console.log(todo);
});