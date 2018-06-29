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

  db.collection('Users').findOneAndUpdate({name: 'sonu'},
   {
    $inc: {age: 10}
   }, {
    returnOriginal: false
   }).then((res) => {
    console.log('Updated', res);
  }, (err) => {
    console.log('Error', err);
  })

  //db.close();
});