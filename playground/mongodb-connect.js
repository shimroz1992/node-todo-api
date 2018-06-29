//const MongoClient = require('mongodb').MongoClient;

var {MongoClient, ObjectID} = require('mongodb');
// var user = {name: 'john', age: 25};
// var {name} = user;
// console.log(name);

var objectId = new ObjectID();
console.log(objectId);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
  	return console.log('Unable to connect to db server.');
  }
  console.log('Connected to mongodb server.');
  // db.collection('Todos').insertOne({
  //  text: 'somthing',
  //  completed: true
  // }, (err, result) => {
  //   if(err){
  //   	return console.log('Unable to insert', err);
  //   }
  //   console.log('Todo inserted', JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'john',
  //   age: 26,
  //   location: 'indore'
  // }, (err, result) => {
  //   if(err){
  //   	return console.log('Unable to insert data', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  //   //console.log('Todo inserted', JSON.stringify(result.ops, undefined, 2));
  // });

  db.close();
});