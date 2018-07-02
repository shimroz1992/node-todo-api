const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

 var id = '5b35f7889716e6aa307ea735';

// if(!ObjectID.isValid(id)){
// 	console.log('Id not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
//   console.log('todo by find', todos);
// })


// Todo.findOne({
// 	_id: id
// }).then((todo) => {
//   console.log('todo by findOne', todo);
// })


// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('Id not found.');
// 	}
//   console.log('todo by id', todo);
// }).catch((e) => {
// 	console.log(e);
// })

User.findById(id).then((user) => {
	if(!user){
		return console.log('user not found');
	}
  console.log('User', user);
}).catch((e) => {
	console.log(e);
})