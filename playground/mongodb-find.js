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

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b34dd944a1cfe156ae82d1a') 
  // }).toArray().then((docs) => {
  //   console.log('todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos',err);
  // })

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Count :', count);
  // }, (err) => {
  //   console.log('Error :', err); 
  // })

  db.collection('Users').find({name: 'john'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Error', err);
  })

  //db.close();
});