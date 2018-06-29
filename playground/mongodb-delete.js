//const MongoClient = require('mongodb').MongoClient;

var {MongoClient, ObjectID} = require('mongodb');
// var user = {name: 'john', age: 25};
// var {name} = user;
// console.log(name);

var objectId = new ObjectID();
//console.log(objectId);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
  	return console.log('Unable to connect to db server.');
  }
  console.log('Connected to mongodb server.');

  
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((res) => {
  //   console.log('Todo deleted.', res);
  // }, (err) => {
  //   console.log('Error occured.');
  // })

  // db.collection('Todos').deleteOne({text: 'test text'}).then((res) => {
  //  console.log('Todo deleted.', res);
  // }, (err) => {
  //   console.log('Error occured.', err);
  // })

  db.collection('Todos').findOneAndDelete({text: 'somthing'}).then((res) => {
    console.log('Todo deleted.', res);
  }, (err) => {
    console.log('Error occured.', err);
  })

  //db.close();
});