const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({})

// Todo.remove({}).then((res) => {
//   console.log('Todo deleted', res);
// })

//Todo.findOneAndRemove()

// Todo.findOneAndRemove({_id: "5b3c6c927a7588df1eea6232"}).then((res) => {
//   console.log('Todo deleted', res);
// })

//Todo.findByIdAndRemove()
// Todo.findByIdAndRemove("5b3c6d7b7a7588df1eea6262").then((res) => {
//   console.log('Todo removed', res);
// })
