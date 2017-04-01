const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
// var message = 'I am user number 3';
// // hashing the message, returns an object
// var hash = SHA256(message).toString();

// console.log('Message: ' + message);
// console.log('Hash: ' + hash);

// var data = {
// 	id: 4
// };
// var token = {
// 	data: data,
// 	// somesecret is the salt!
// 	hash: SHA256(JSON.stringify(data) + 'somesecret').toString() 
// };

// // this is an example of how the middleman might try to change the data
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();


// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
// 	console.log('Data was not changed');
// } else {
// 	console.log('data was changed dont trust');
// }

var data = {
	id: 10
};

// second argument is the SECRET. returns the token
var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded: ', decoded);